import { getFriends } from "../../DAL/api";
import { endLoadingFriends } from "../Actions/Loadings/endLoadingFriends";
import { setFriends } from "../Actions/Friends/setFriends";
import { startLoadingFriends } from "../Actions/Loadings/startLoadingFriends";

export const loadFriendsThunk = (friendsCount, currentPage) => {
	return async (dispatch) => {
		dispatch(startLoadingFriends());

		const friends = await getFriends(friendsCount, currentPage);

		dispatch(setFriends(friends));

		dispatch(endLoadingFriends());
	};
};
