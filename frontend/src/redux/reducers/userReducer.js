/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        user: action.user,
        isLogged: true,
      };
    case actionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        errorUser: action.errorUser,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        isLogged: false,
      };
    case actionTypes.LOAD_USER:
      return {
        ...state,
        myUser: [...action.user],
      };
    case actionTypes.LOAD_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
