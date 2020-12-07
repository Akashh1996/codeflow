import firebase from 'firebase/app';
import actionTypes from './actionTypes';
import './Firebase/firebaseIndex';
import 'firebase/database';
import 'firebase/storage';

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
    } catch (error) {
      dispatch(signInWithGoogleError(error));
    }
  };
}
export function logOut() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
