import actionTypes from '../actions/actionTypes';

const initialState = { tags: [] };
export default function questionReducer(state = initialState, action) {
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
        displayList: action.questionList,
      };
    case actionTypes.FILTER_BY_TAG:
      return {
        ...state,
        displayList: action.questionList.filter((question) => question.tag === action.tag),
      };
    case actionTypes.LOAD_QUESTION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
