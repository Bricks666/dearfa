import { UNFOLLOW_USER } from "../../Actions/Constants";

export const unfollowUserReducer = (state, action) => {
  if (action.type === UNFOLLOW_USER) {
    const newState = {
      ...state,
      list: state.list.map((friend) => {
        if (friend.id === action.id) {
          return { ...friend, followed: false };
        }

        return friend;
      }),
    };

    return newState;
  }

  return state;
};
