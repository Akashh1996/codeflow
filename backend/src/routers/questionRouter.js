const { Router } = require('express');
const questionController = require('../controllers/questionController');

function questionRouter(Question) {
  const router = Router();
  const question = questionController(Question);

  router.route('/:questionId')
    .all(question.allMiddleware)
    .get(question.getMethod)
    .delete(question.deleteMethod)
    .put(question.putMethod)
    .post(question.postMethod);
  return router;
}

module.exports = questionRouter;
