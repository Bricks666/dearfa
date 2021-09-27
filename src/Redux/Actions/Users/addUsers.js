import { ADD_USERS } from "../../ActionsConstants";

export const addUsers = (data) => {
  return {
    type: ADD_USERS,
    data,
  };
};
