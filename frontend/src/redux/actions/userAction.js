import firebase from 'firebase';
import axios from 'axios';
import actionTypes from './actionTypes';
import './Firebase/firebaseIndex';

const endpointUser = 'http://localhost:8000/user';

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

export default function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return async (dispatch) => {
    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
      dispatch(signInWithGoogleSuccess(user));
      dispatch(addUser({
        uid: user.uid,
        displayName: user.displayName,
        photo: user.photoURL,
        email: user.email,
      }));
    } catch (error) {
      dispatch(signInWithGoogleError(error));
    }
  };
}

export function loadUserSuccess(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

export function loadUserError(error) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    error,
  };
}

export function loadUser() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8000/user');
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadUserError(error));
    }
  };
}
