import axios from 'axios';
import actionTypes from './actionTypes';

const endpoint = 'http://localhost:8000/questions';

function loadQuestionSuccess(questionList) {
  return {
    type: actionTypes.LOAD_QUESTION,
    questionList,
  };
}
function loadQuestionError(error) {
  return {
    type: actionTypes.LOAD_QUESTION_ERROR,
    error,
  };
}

export default function loadQuestion(tag) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint, { params: { tag } });
      dispatch(loadQuestionSuccess(data));
    } catch (error) {
      dispatch(loadQuestionError(error));
    }
  };
}
export function filterByNoAnswer() {
  return {
    type: actionTypes.FILTER_BY_NO_ANSWER,
  };
}
export function reset() {
  return {
    type: actionTypes.FILTER_BY_TAG,
  };
}
