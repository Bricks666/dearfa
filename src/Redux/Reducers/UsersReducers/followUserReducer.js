import { FOLLOW_USER } from "../../Actions/Constants";

export const followUserReducer = (state, action) => {
  if (action.type === FOLLOW_USER) {
    const newState = {
      ...state,
      list: state.list.map((user) => {
        if (user.id === action.user.id) {
          return { ...user, followed: true };
        }

        return user;
      }),
    };
    return newState;
  }

  return state;
};
