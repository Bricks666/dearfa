import { END_FOLLOWING_USER } from "../../ActionsConstants";

export const endFollowingUser = (userId) => {
  return {
    type: END_FOLLOWING_USER,
    userId,
  };
};
