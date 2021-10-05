import { SET_USERS } from "../../ActionsConstants";

export const setUsers = (data) => {
  return {
    type: SET_USERS,
    data,
  };
};
