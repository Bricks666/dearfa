import { UNFOLLOW_USER } from "../../ActionsConstants";

export const unfollowUserActionCreator = (id) => {
  return {
    type: UNFOLLOW_USER,
    id,
  };
};
