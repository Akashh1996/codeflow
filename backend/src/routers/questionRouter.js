const { Router } = require('express');
const questionController = require('../controllers/questionController');

function questionRouter(Quesion) {
  const router = Router();
  const question = questionController(Quesion);

  router.route('/')
    .get(question.getMethod)
    .delete(question.deleteMethod)
    .put(question.putMethod)
    .post(question.postMethod);
  return router;
}

module.exports = questionRouter;
