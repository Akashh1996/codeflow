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
      const result = await firebase.auth().signInWithPopup(provider);
      if (result.additionalUserInfo.isNewUser) {
        firebase
          .database()
          .ref(`/users/${result.user.uid}`)
          .set({
            gmail: result.user.email,
            profile_picture: result.additionalUserInfo.profile.picture,
            locale: result.additionalUserInfo.profile.locale,
            first_name: result.additionalUserInfo.profile.given_name,
            last_name: result.additionalUserInfo.profile.family_name,
            created_at: Date.now(),
          });
      } else {
        firebase
          .database()
          .ref(`/users/${result.user.uid}`).update({
            last_logged_in: Date.now(),
          });
      }
      dispatch(signInWithGoogleSuccess(result));
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
