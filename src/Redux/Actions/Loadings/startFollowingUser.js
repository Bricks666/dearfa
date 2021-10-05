import { START_FOLLOWING_USER } from "../../ActionsConstants";

export const startFollowingUser = (userId) => {
  return {
    type: START_FOLLOWING_USER,
    userId,
  };
};
