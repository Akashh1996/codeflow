/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const endpoint = 'https://code-flow.herokuapp.com/answers';

function postAnswerSuccess(newAnswer) {
  return {
    type: actionTypes.POST_ANSWER,
    newAnswer,
  };
}
function postAnswerError(error) {
  return {
    type: actionTypes.POST_ANSWER_ERROR,
    error,
  };
}

export default function postAnswer(newAnswer) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, newAnswer);
      debugger;
      dispatch(postAnswerSuccess(data));
    } catch (error) {
      dispatch(postAnswerError(error));
    }
  };
}

function deleteAnswerSuccess(deletedAnswer) {
  debugger;
  return {
    type: actionTypes.DELETE_ANSWER,
    deletedAnswer,
  };
}

function deleteAnswerError(error) {
  return {
    type: actionTypes.DELETE_ANSWER_ERROR,
    error,
  };
}

export function deleteAnswer(answerId) {
  debugger;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint, {
        params: {
          _id: answerId,
        },
      });
      dispatch(deleteAnswerSuccess(data));
    } catch (error) {
      dispatch(deleteAnswerError(error));
    }
  };
}
