import { getFriends } from "../../DAL/api";
import { endLoadingFriends } from "../Actions/Loadings/endLoadingFriends";
import { startLoadingFriends } from "../Actions/Loadings/startLoadingFriends";
import { nextFriendsPage } from "../Actions/Friends/nextFriendsPage";

export const nextFriendsPageThunk = (friendsCount, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingFriends());

			const friends = await getFriends(friendsCount, page);

			dispatch(nextFriendsPage(friends.items, page));

			dispatch(endLoadingFriends());
		} catch (e) {
			console.log(e.message);
		}
	};
};
