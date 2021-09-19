import { ADD_USERS } from "../../Actions/Constants";

export const addUsers = (state, action) => {
  if (action.type === ADD_USERS) {
    const newState = {
      ...state,
      list: action.data.items,
      totalUsers: action.data.totalCount,
      pageCount: Math.ceil(action.data.totalCount / state.usersCount),
    };

    return newState;
  }

  return state;
};
