import { START_FOLLOWING_FRIENDS } from "../../ActionsConstants";

export const startFollowingFriends = (friendId) => {
  return {
    type: START_FOLLOWING_FRIENDS,
    friendId,
  };
};
