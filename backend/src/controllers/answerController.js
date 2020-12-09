/* eslint-disable max-len */
function answerController(Answer, Question) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(errorFindAnswer, question) {
      return errorFindAnswer ? res.send(errorFindAnswer) : res.json(question);
    }
    Answer.find(query, findCallback);
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
      user: '5fd0e8de4aa3c42472f13e35',
      answerDescription: body.answerDescription,
      code: body.code,
    };
    const queryFind = { answerDescription: answerObject.answerDescription };
    let answerFound;
    function findCallback(errorFindAnswer, answer) {
      if (errorFindAnswer) {
        res.send(errorFindAnswer);
      } else {
        answerFound = answer._id;
      }
    }
    /*  function postCallback(errorCreateAnswer, createdNewAnswer) {
      return errorCreateAnswer ? res.send(errorCreateAnswer) : res.json(createdNewAnswer);
    } */

    await Answer.create(answerObject);

    await Answer.findOne(queryFind, findCallback);

    Question.findOne({ _id: '5fcec806e09ba44dc0b4f3ae' }, (errorFound, question) => {
      if (errorFound) {
        res.send(errorFound);
      } else {
        question.answers.push(answerFound);
        console.log('ACAAAAAAAAAAAA', question);
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
