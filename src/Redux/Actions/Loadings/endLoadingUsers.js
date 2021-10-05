import { END_LOADING_USERS } from "../../ActionsConstants";

export const endLoadingUsers = () => {
  return {
    type: END_LOADING_USERS,
  };
};
