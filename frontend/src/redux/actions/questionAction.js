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

export default function loadQuestion() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      dispatch(loadQuestionSuccess(data));
    } catch (error) {
      dispatch(loadQuestionError(error));
    }
  };
}
export function filterByTag(tag) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.FILTER_BY_TAG,
    tag,
  };
}
