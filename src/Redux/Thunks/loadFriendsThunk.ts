import { getFriends } from "../../Api";
import {
	startLoadingFriends,
	endLoadingFriends,
} from "../Reducers/loadingsReducer";
import { setFriends } from "../Reducers/friendsReducer";
import { LoadFriendsThunk } from "../../Types/Redux";

export const loadFriendsThunk: LoadFriendsThunk = (
	friendsCount,
	currentPage
) => {
	return async (dispatch) => {
		dispatch(startLoadingFriends());

		const friends = await getFriends(friendsCount, currentPage);

		dispatch(setFriends(friends));

		dispatch(endLoadingFriends());
	};
};
