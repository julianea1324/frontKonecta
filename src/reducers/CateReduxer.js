import { types } from "../types/types";

const initialState = {
  categories: [],
};
export const CateReduxer = (state = initialState, action) => {
  switch (action.type) {
    case types.createCategories:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

      case types.readingCategories:
      return {
        ...state,
        categories: [...action.payload],
      };

      case types.deleteCategories:
      return {
        ...state,
        categories: state.categories.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
