import { START_LOADING_USERS } from "../Constants";

export const startLoadingUsers = () => {
  return {
    type: START_LOADING_USERS,
  };
};
