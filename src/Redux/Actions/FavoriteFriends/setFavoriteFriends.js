import { SET_FAVORITE_FRIENDS } from "../../ActionsConstants";

export const setFavoriteFriends = (data) => {
  return {
    type: SET_FAVORITE_FRIENDS,
    data,
  };
};
