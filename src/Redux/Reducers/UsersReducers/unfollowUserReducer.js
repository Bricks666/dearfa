import { UNFOLLOW_USER } from "../../Constants";

export const unfollowUserReducer = (state, action) => {
  if (action.type === UNFOLLOW_USER) {
    const newState = state.map((friend) => {
      if (friend.info.id === action.userId) {
        return { ...friend, isFriend: false };
      }

      return friend;
    });

    return newState;
  }

  return state;
};
