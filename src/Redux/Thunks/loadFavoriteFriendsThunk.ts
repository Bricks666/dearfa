import { getFavoriteFriends } from "../../Api";
import {
	startLoadingFavoriteFriends,
	endLoadingFavoriteFriends,
} from "../Reducers/loadingsReducer";
import { setFavoriteFriends } from "../Reducers/favoriteFriendsReducer";
import { LoadFavoriteFriendsThunk } from "../../Types/Redux";

export const loadFavoriteFriendsThunk: LoadFavoriteFriendsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingFavoriteFriends());

			const favoriteFriends = (await getFavoriteFriends()).data;

			dispatch(setFavoriteFriends(favoriteFriends));

			dispatch(endLoadingFavoriteFriends());
		} catch (e) {
			console.log(e);
		}
	};
};
