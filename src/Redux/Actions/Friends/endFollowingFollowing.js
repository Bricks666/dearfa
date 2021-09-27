import { END_FOLLOWING_FRIENDS } from "../../ActionsConstants";

export const endFollowingFriends = (friendId) => {
  return {
    type: END_FOLLOWING_FRIENDS,
    friendId,
  };
};
