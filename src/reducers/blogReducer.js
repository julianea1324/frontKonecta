import { types } from "../types/types";

const initialState = {
  posts: [],
  postActve: [],

};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.readingBlog:
      return {
        ...state,
        posts: [...action.payload],
      };
    case types.createBlog:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case types.readingOneBlog:
      return {
        ...state,
        postActve: [action.payload],
      };  
    case types.blogUpdate:
      return {
        ...state,
        postActve: [action.payload],
      };
    case types.blogDelete:
      return {
        ...state,
        posts: state.posts.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
