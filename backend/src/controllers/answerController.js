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
    const { questionId } = body;

    const answerObject = {
      user: body.userId,
      answerDescription: body.answerDescription,
      code: body.code,
    };

    const queryFind = { answerDescription: answerObject.answerDescription };
    try {
      await Answer.create(answerObject);
      const answerFound = await Answer.findOne(queryFind).populate('user');

      const answerId = answerFound._id;

      const foundQuestion = await Question.findOne({ _id: questionId });
      foundQuestion.answers.push(answerId);
      await foundQuestion.save();

      res.json(answerFound);
    } catch (error) {
      res.send(error);
    }
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = answerController;
