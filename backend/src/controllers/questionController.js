function questionController(Question) {
  function getMethod(req, res) {
    const query = req.id;
    const question = Question.findById(query);
    question.populate('answers').populate('owner');
    question.exec((errorFindQuestion, questions) => {
      if (errorFindQuestion) {
        return res.send(errorFindQuestion);
      }
      return res.json(questions);
    });
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

  function allMiddleware(req, res, next) {
    req.id = req.params.questionId;
    next();
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod, allMiddleware,
  };
}

module.exports = questionController;
