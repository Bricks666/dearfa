import { NEXT_FRIENDS_PAGE } from "../../ActionsConstants";

export const nextFriendsPage = (friends, page) => {
  return {
    type: NEXT_FRIENDS_PAGE,
    page,
    friends,
  };
};
