function answerController(Answer) {
  function getMethod(req, res) {
    const query = req.body;
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

  function postMethod({ body }, res) {
    const newAnswer = body;
    function postCallback(errorCreateAnswer, createdNewAnswer) {
      return errorCreateAnswer ? res.send(errorCreateAnswer) : res.json(createdNewAnswer);
    }
    Answer.create(newAnswer, postCallback);
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = answerController;
