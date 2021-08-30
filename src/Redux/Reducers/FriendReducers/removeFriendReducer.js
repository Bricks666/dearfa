import { REMOVE_FRIEND } from "../../Constants"; import { deepCopy } from "../../deepCopy";


export const removeFriendReducer = (state, action) => {
  if (action.type === REMOVE_FRIEND) {

    const newState = deepCopy(state).filter(
      (friend) => friend.info.id !== action.friendId
    );

    return newState;
  }

  return state;
};
