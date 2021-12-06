import { api } from "../../DAL/api";
import {
	startLoadingFavoriteFriends,
	endLoadingFavoriteFriends,
} from "../Reducers/loadingsReducer";
import { setFavoriteFriends } from "../Reducers/favoriteFriendsReducer";

export const loadFavoriteFriendsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingFavoriteFriends());

			const favoriteFriends = await api.getFavoriteFriends();

			dispatch(setFavoriteFriends(favoriteFriends));

			dispatch(endLoadingFavoriteFriends());
		} catch (e) {
			console.log(e.message);
		}
	};
};
