import actionTypes from '../actions/actionTypes';

export default function questionReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_QUESTION:
      return { ...state, questionList: action.questionList };
    case actionTypes.LOAD_QUESTION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
