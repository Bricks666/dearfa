import { UNFOLLOW_USER } from "../Constants";

export const unfollowUserActionCreator = (id) => {
  return {
    type: UNFOLLOW_USER,
    userId: id,
  };
};
