import { NEXT_FRIENDS_PAGE } from "../Constants";

export const nextFriendsPage = (friends, page) => {
  return {
    type: NEXT_FRIENDS_PAGE,
    page,
    friends,
  };
};
