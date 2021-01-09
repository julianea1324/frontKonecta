import { types } from "../types/types";

const initialState = {
  users: [],
  userActive: [],
};

export const UserRedux = (state = initialState, action) => {
  switch (action.type) {
    case types.userRead:
      return {
        ...state,
        users: [...action.payload],
      };   
    case types.userOneRead:
      return {
        ...state,
        userActive: [action.payload],
      };  
    case types.userUpdate:
      return {
        ...state,
        userActive: [action.payload],
      };
    case types.userDelete:
      return {
        ...state,
        users: state.users.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
