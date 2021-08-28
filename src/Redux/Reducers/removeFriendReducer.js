import { REMOVE_FRIEND } from "../Constants";

export const removeFriendReducer = (state, action) => {
  if (action.type === REMOVE_FRIEND) {
    const newState = Object.assign([], state).filter(
      (friend) => friend.info.id !== action.friendId
    );

    return newState;
  }

  return state;
};
