const { Router } = require('express');
const answerController = require('../controllers/answerController');

function answerRouter(Answer, Question) {
  const router = Router();
  const question = answerController(Answer, Question);

  router.route('/')
    .get(question.getMethod)
    .delete(question.deleteMethod)
    .put(question.putMethod)
    .post(question.postMethod);
  return router;
}

module.exports = answerRouter;
