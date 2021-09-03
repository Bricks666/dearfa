import { SET_USERS } from "../../Constants";

export const setUsersReducer = (state, action) => {
  if (action.type === SET_USERS) {
    return [...state, ...action.users];
  }

  return state;
};
