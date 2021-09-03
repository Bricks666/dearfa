import { SET_USERS } from "../Constants";

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
