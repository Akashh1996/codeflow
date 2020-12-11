/* eslint-disable no-debugger */
/* import firebase from 'firebase';
import axios from 'axios';
import actionTypes from './actionTypes';
import './Firebase/firebaseIndex';

const endpointUser = 'http://localhost:8000/users';

function addUserSuccess(user) {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
} */

/*
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

export function loadUser(userEmail) {
  debugger;
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8000/users', {
        params: {
          userEmail,
        },
      });
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadUserError(error));
    }
  };
}
 */
/* function signInWithGoogleSuccess(user) {
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

export function addUser(userData) {
  return async (dispatch) => {
    const { data } = await axios.post(endpointUser, userData);
    localStorage.user = JSON.stringify({ user: { ...data } });
    dispatch(addUserSuccess(data));
  };
}

export default function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return async (dispatch) => {
    try {
      debugger;
      const result = await firebase.auth().signInWithPopup(provider);
      const { user } = result;
      dispatch(signInWithGoogleSuccess(user));
      if (result.additionalUserInfo.isNewUser) {
        dispatch(addUser({
          displayName: result.additionalUserInfo.profile.name,
          photo: result.additionalUserInfo.profile.picture,
          email: result.additionalUserInfo.profile.email,
        }));
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
      localStorage.removeItem('user');
      await firebase.auth().signOut();
      dispatch(handleSignOutSuccess());
    } catch (error) {
      dispatch(handleSignOutError(error));
    }
  };
}

export function saveUserFromLocalStorage(user) {
  return {
    type: actionTypes.SAVE_USER,
    user,
  };
}
 */

import './Firebase/firebaseIndex';
import axios from 'axios';
import firebase from 'firebase';
import actionTypes from './actionTypes';

const serverUsersUrl = 'http://localhost:8000/users';
export function addUserSuccess(user) {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
}
export function addUserError(error) {
  return {
    type: actionTypes.ADD_USER_ERROR,
    error,
  };
}
export function addUser(userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(serverUsersUrl, userData);
      debugger;
      localStorage.user = JSON.stringify({ user: { ...data } });
      dispatch(addUserSuccess(data));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
}

export function handleSignInSuccess(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user,
  };
}
export function handleSignOutSuccess() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
export function handleSignInError(error) {
  return {
    type: actionTypes.AUTH_LOGIN_ERROR,
    error,
  };
}
export function handleSignOutError(error) {
  return {
    type: actionTypes.AUTH_LOGOUT_ERROR,
    error,
  };
}
export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return async (dispatch) => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user } = result;
      dispatch(handleSignInSuccess(user));
      dispatch(addUser({
        displayName: result.additionalUserInfo.profile.name,
        photo: result.additionalUserInfo.profile.picture,
        email: result.additionalUserInfo.profile.email,
      }));
    } catch (error) {
      dispatch(handleSignInError(error));
    }
  };
}
export function signOut() {
  return async (dispatch) => {
    try {
      localStorage.removeItem('user');
      await firebase.auth().signOut();
      dispatch(handleSignOutSuccess());
    } catch (error) {
      dispatch(handleSignOutError(error));
    }
  };
}
export function saveUserFromLocalStorage(user) {
  return {
    type: actionTypes.SAVE_USER,
    user,
  };
}
