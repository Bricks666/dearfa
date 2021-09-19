import { STOP_LOADING_USERS } from "./Constants";

export const stopLoadingUsers = () => {
  return {
    type: STOP_LOADING_USERS,
  };
};
