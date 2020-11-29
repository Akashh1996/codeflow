function questionController(Question) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(errorFindQuestion, question) {
      return errorFindQuestion ? res.send(errorFindQuestion) : res.json(question);
    }
    Question.find(query, findCallback);
  }

  function deleteMethod({ body }, res) {
    const query = body._id;
    function deleteCallback(errorDeleteQuestion, removedQuestion) {
      return errorDeleteQuestion ? res.send(errorDeleteQuestion) : res.json(removedQuestion);
    }
    Question.findByIdAndRemove(query, body, deleteCallback);
  }

  function putMethod({ body }, res) {
    const query = body._id;
    function putCallback(errorFindQuestion, updatedQuestion) {
      return errorFindQuestion ? res.send(errorFindQuestion) : res.json(updatedQuestion);
    }
    Question.findByIdAndUpdate(query, body, putCallback);
  }

  function postMethod({ body }, res) {
    const newQuestion = body;
    function postCallback(errorFindQuestion, createdNewQuestion) {
      return errorFindQuestion ? res.send(errorFindQuestion) : res.json(createdNewQuestion);
    }
    Question.create(newQuestion, postCallback);
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = questionController;
