import { FOLLOW_USER } from "../../Constants";

export const followUserReducer = (state, action) => {
  if (action.type === FOLLOW_USER) {
    const newState = state.map((user) => {
      if (user.info.id === action.userId) {
        return { ...user, isFriend: true };
      }

      return user;
    });

    return newState;
  }

  return state;
};
