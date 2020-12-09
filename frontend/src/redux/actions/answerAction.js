/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const endpoint = 'http://localhost:8000/answers';

function postAnswerSuccess(newAnswer) {
  return {
    type: actionTypes.LOAD_QUESTION,
    newAnswer,
  };
}
function postAnswerError(error) {
  return {
    type: actionTypes.LOAD_QUESTION_ERROR,
    error,
  };
}

export default function postAnswer(newAnswer) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, newAnswer);
      dispatch(postAnswerSuccess(data));
    } catch (error) {
      dispatch(postAnswerError(error));
    }
  };
}
