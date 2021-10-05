import { getFavoriteFriends } from "../../DAL/api";
import { endLoadingFavoriteFriends } from "../Actions/Loadings/endLoadingFavoriteFriends";
import { setFavoriteFriends } from "../Actions/FavoriteFriends/setFavoriteFriends";
import { startLoadingFavoriteFriends } from "../Actions/Loadings/startLoadingFavoriteFriends";

export const loadFavoriteFriendsThunk = (isLoaded) => {
  return async (dispatch) => {

    if (isLoaded) {
      return;
    }

    dispatch(startLoadingFavoriteFriends());

    const favoriteFriends = await getFavoriteFriends();

    dispatch(setFavoriteFriends(favoriteFriends));

    dispatch(endLoadingFavoriteFriends());
  };
};
