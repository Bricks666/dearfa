import {
	startLoadingFavoriteFriends,
	endLoadingFavoriteFriends,
} from "../Reducers/loadingsReducer";
import { setFavoriteFriends } from "../Reducers/favoriteFriendsReducer";
import { LoadFavoriteFriendsThunk } from "../../Types/Redux";
import { getUsers } from "../../Api";

export const loadFavoriteFriendsThunk: LoadFavoriteFriendsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingFavoriteFriends());

			const favoriteFriends = await getUsers(6, 1, true);

			dispatch(setFavoriteFriends(favoriteFriends));

			dispatch(endLoadingFavoriteFriends());
		} catch (e) {
			console.log(e);
		}
	};
};
