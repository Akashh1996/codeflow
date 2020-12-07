import axios from 'axios';
import actionTypes from './actionTypes';

const endpoint = 'http://localhost:8000/questions';
const endpointUser = 'http://localhost:8000/user';

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
    type: actionTypes.RESET,
  };
}

/* export default function createNewQuestion(questionData, userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.gepostt(endpoint, { body:{
        question: questionData.question,
        date: Date.now()
        user: userData.displayName,
        userPhoto:
      } });
      dispatch(loadQuestionSuccess(data));
    } catch (error) {
      dispatch(loadQuestionError(error));
    }
  };
} */

function addUserSuccess(user) {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
}

export function addUser(userData) {
  return async (dispatch) => {
    const { data } = await axios.post(endpointUser, userData);
    dispatch(addUserSuccess(data));
  };
}

function postQuestionSuccess(newQuestion) {
  return {
    type: actionTypes.LOAD_QUESTION,
    newQuestion,
  };
}

function postQuestionError(error) {
  return {
    type: actionTypes.POST_QUESTION,
    error,
  };
}

export function postQuestion(question) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, question);
      dispatch(postQuestionSuccess(data));
    } catch (error) {
      dispatch(postQuestionError(error));
    }
  };
}
