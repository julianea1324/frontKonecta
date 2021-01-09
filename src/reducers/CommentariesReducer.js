import { types } from "../types/types";

const initialState = {
  commentaries: [],
};
export const CommentariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.commentCreate:
      return {
        ...state,
        commentaries: [...state.commentaries, action.payload],
      };

    case types.commentRead:
      return {
        ...state,
        commentaries: [...action.payload],
      };

      case types.commentDelete:
      return {
        ...state,
        commentaries: state.commentaries.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
