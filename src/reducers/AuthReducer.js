import { types } from "../types/types";

const checking = localStorage.getItem('checking')
const initialState = {
  checking: checking,
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
    return{
      ...state,
      checking:false,
      ...action.payload
    }
    case types.authChekingFinish:
      return{
        ...state,
        checking : false
      }
    case types.authLogout:
      return{
        checking:false
      }
    default:
      return state;
  }
};
