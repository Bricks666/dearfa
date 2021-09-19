import { ADD_USERS } from "../Constants";

export const addUsers = (data) => {
  return {
    type: ADD_USERS,
    data,
  };
};
