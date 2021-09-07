import { FOLLOW_USER } from "../../Constants";

export const followUserReducer = (state, action) => {
  if (action.type === FOLLOW_USER) {
    const newState = state.map((user) => {
      if (user.id === action.userId) {
        return { ...user, followed: true };
      }

      return user;
    });

    return newState;
  }

  return state;
};
