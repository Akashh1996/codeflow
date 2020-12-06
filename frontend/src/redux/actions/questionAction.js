import axios from 'axios';
import firebase from 'firebase';
import actionTypes from './actionTypes';
import './Firebase/firebaseIndex';

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

function signInWithGoogleSuccess(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user,
  };
}
function signInWithGoogleError(error) {
  return {
    type: actionTypes.LOAD_QUESTION_ERROR,
    error,
  };
}

export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return async (dispatch) => {
    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
      dispatch(signInWithGoogleSuccess(user));
    } catch (error) {
      dispatch(signInWithGoogleError(error));
    }
  };
}
