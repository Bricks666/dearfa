import { END_LOADING_FAVORITE_FRIENDS } from "../../ActionsConstants";

export const endLoadingFavoriteFriends = () => {
  return {
    type: END_LOADING_FAVORITE_FRIENDS,
  };
};
