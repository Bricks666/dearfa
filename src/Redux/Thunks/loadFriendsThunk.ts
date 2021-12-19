import {
	startLoadingFriends,
	endLoadingFriends,
} from "../Reducers/loadingsReducer";
import { setFriends } from "../Reducers/friendsReducer";
import { LoadFriendsThunk } from "../../Types/Redux";
import { getUsers } from "../../Api";

export const loadFriendsThunk: LoadFriendsThunk = (
	friendsCount,
	currentPage
) => {
	return async (dispatch) => {
		dispatch(startLoadingFriends());

		const friends = await getUsers(friendsCount, currentPage, true);

		dispatch(setFriends(friends));

		dispatch(endLoadingFriends());
	};
};
