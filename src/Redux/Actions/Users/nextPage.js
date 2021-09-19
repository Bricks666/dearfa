import { NEXT_PAGE } from "../Constants";

export const nextPage = (users, page) => {
  return {
    type: NEXT_PAGE,
    currentPage: page,
    users,
  };
};
