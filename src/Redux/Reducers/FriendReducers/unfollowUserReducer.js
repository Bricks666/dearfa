import { UNFOLLOW_USER } from "../../Constants";


export const unfollowUserReducer = (state, action) => {
  if (action.type === UNFOLLOW_USER) {

    const newState = state.filter(
      (friend) => friend.info.id !== action.friendId
    );

    return newState;
  }

  return state;
};
