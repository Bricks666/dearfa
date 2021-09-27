import { NEXT_FRIENDS_PAGE } from "../../ActionConstants";

export const nextFriendsPage = (friends, page) => {
  return {
    type: NEXT_FRIENDS_PAGE,
    page,
    friends,
  };
};
