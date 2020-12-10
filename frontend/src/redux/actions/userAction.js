/* eslint-disable no-debugger */
import firebase from 'firebase';
import axios from 'axios';
import actionTypes from './actionTypes';
import './Firebase/firebaseIndex';

const endpointUser = 'http://localhost:8000/users';

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
  debugger;
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8000/users');
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadUserError(error));
    }
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
      debugger;
      const result = await firebase.auth().signInWithPopup(provider);
      dispatch(signInWithGoogleSuccess(result));
      if (result.additionalUserInfo.isNewUser) {
        dispatch(addUser({
          uid: result.additionalUserInfo.profile.id,
          displayName: result.additionalUserInfo.profile.name,
          photo: result.additionalUserInfo.profile.picture,
          email: result.additionalUserInfo.profile.email,
        }));
      } else {
        dispatch(loadUser());
      }
    } catch (error) {
      dispatch(signInWithGoogleError(error));
    }
  };
}

export function handleSignOutSuccess() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
export function handleSignOutError(error) {
  return {
    type: actionTypes.AUTH_LOGOUT_ERROR,
    error,
  };
}
export function signOut() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(handleSignOutSuccess());
    } catch (error) {
      dispatch(handleSignOutError(error));
    }
  };
}
