/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

const initialState = { tags: [] };
export default function questionReducer(state = initialState, action) {
  debugger;
  let newTagsMap;
  let newTags;
  switch (action.type) {
    case actionTypes.LOAD_QUESTION:
      newTagsMap = action.questionList.map((question) => question.tag);
      newTags = newTagsMap.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);
      return {
        ...state,
        questionList: action.questionList,
        tags: newTags,
        displayList: action.questionList.reverse(),
      };
    case actionTypes.LOAD_QUESTION_ERROR:
      return { ...state, error: action.error };
    case actionTypes.FILTER_BY_TAG:
      return { ...state, displayList: action.tagList };
    case actionTypes.FILTER_BY_NO_ANSWER:
      return {
        ...state,
        displayList: state.questionList.filter((question) => question.answers.length === 0),
      };
    case actionTypes.LOAD_QUESTION_DETAIL:
      return {
        ...state,
        questionDetail: action.questionDetail,
      };
    case actionTypes.LOAD_QUESTION_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.RESET:
      return {
        ...state,
        displayList: state.questionList,
      };
    case actionTypes.POST_QUESTION:
      return {
        ...state,
        displayList: state.questionList,
      };
    case actionTypes.POST_ANSWER:
      return {
        ...state,
        questionDetail: {
          ...state.questionDetail,
          answers: [...state.questionDetail.answers, action.newAnswer],
        },
      };
    case actionTypes.DELETE_QUESTION:
      debugger;
      const newQuestions = state.questionList.filter((question) => question._id !== action.deletedQuestion._id);
      debugger;
      return {
        ...state,
        displayList: [...state.displayList, newQuestions],
        tags: state.tags.filter((tag) => tag !== action.deletedQuestion.tag),
      };
    case actionTypes.DELETE_ANSWER:
      debugger;
      return {
        ...state,
        questionDetail: {
          ...state.questionDetail,
          answers: [...state.questionDetail.answers.filter((answer) => answer._id !== action.deletedAnswer._id)],
        },
      };
    default:
      return state;
  }
}
