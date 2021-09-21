import { NEXT_USERS_PAGE } from "../../Actions/Constants";

export const nextUsersPage = (state, action) => {
  if (action.type === NEXT_USERS_PAGE) {
    return {
      ...state,
      currentPage: action.currentPage,
      list: action.users,
    };
  }

  return state;
};
