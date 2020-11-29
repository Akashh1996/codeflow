function questionController(Question) {
  function getMethod(req, res) {
    const query = {};
    Question.find(query, (errorQuestion, question) => (errorQuestion ? res.send(errorQuestion) : res.json(question)));
  }
  function deleteMethod({ body }, res) {
    Question.findByIdAndRemove(body._id, body, (errorDeleteQuestion, removedQuestion) => (errorDeleteQuestion ? res.send(errorDeleteQuestion) : res.send(removedQuestion)));
  }
  function putMethod({ body }, res) {
    Question.findByIdAndUpdate(body._id, body, (errorFindQuestion, updatedQuestion) => (errorFindQuestion ? res.send(errorFindQuestion) : res.send(updatedQuestion)));
  }
  function postMethod(req, res) {
    const newQuestion = req.body;
    Question.create(newQuestion, (errorUpdateQuestion) => (errorUpdateQuestion ? res.send(errorUpdateQuestion) : res.send(newQuestion)));
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = questionController;
