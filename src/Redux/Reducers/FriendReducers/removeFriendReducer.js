import { REMOVE_FRIEND } from "../../Constants";


export const removeFriendReducer = (state, action) => {
  if (action.type === REMOVE_FRIEND) {
    debugger;
    const newState = state.filter(
      (friend) => friend.info.id !== action.friendId
    );

    return newState;
  }

  return state;
};
