import { NEXT_PAGE } from "../../Actions/Constants";

export const nextPage = (state, action) => {
  if (action.type === NEXT_PAGE) {
    return {
      ...state,
      currentPage: action.currentPage,
      list: action.users,
    };
  }

  return state;
};
