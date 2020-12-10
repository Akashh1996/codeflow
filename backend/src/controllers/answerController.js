/* eslint-disable max-len */
function answerController(Answer, Question) {
  function getMethod(req, res) {
    const { query } = req;
    Answer.find(query).populate('user')
      .exec((errorFindAnswer, answer) => {
        if (errorFindAnswer) {
          return res.send(errorFindAnswer);
        }
        return res.json(answer);
      });
  }
  function deleteMethod({ body }, res) {
    const query = body._id;
    function deleteCallback(errorDeleteAnswer, removedAnswer) {
      return errorDeleteAnswer ? res.send(errorDeleteAnswer) : res.json(removedAnswer);
    }
    Answer.findByIdAndRemove(query, body, deleteCallback);
  }

  function putMethod({ body }, res) {
    const query = body._id;
    function putCallback(errorFindAnswer, updatedAnswer) {
      return errorFindAnswer ? res.send(errorFindAnswer) : res.json(updatedAnswer);
    }
    Answer.findByIdAndUpdate(query, body, putCallback);
  }

  async function postMethod({ body }, res) {
    const answerObject = {
      user: body.userId,
      answerDescription: body.answerDescription,
      code: body.code,
    };
    const queryFind = { answerDescription: answerObject.answerDescription };
    let answerFound;
    function findCallback(errorFindAnswer, answer) {
      if (errorFindAnswer) {
        res.send(errorFindAnswer);
      } else {
        res.json(answer);
        answerFound = answer._id;
      }
    }
    /*  function postCallback(errorCreateAnswer, createdNewAnswer) {
      return errorCreateAnswer ? res.send(errorCreateAnswer) : res.json(createdNewAnswer);
    } */

    await Answer.create(answerObject);

    await Answer.findOne(queryFind, findCallback);

    Question.findOne({ _id: '5fd2b04ce7e9eb6634ba31c2' }, (errorFound, question) => {
      if (errorFound) {
        res.send(errorFound);
      } else {
        question.answers.push(answerFound);
        question.save();
      }
    });

    //  Question.findOneAndUpdate({ _id: '5fcec806e09ba44dc0b4f3ae' }, { $push: { answers: answerFound } });
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = answerController;
