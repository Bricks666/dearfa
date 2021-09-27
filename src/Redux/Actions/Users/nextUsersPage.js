import { NEXT_USERS_PAGE } from "../../ActionsConstants";

export const nextUsersPage = (users, page) => {
  return {
    type: NEXT_USERS_PAGE,
    currentPage: page,
    users,
  };
};
