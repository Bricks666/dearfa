import { api } from "../../DAL/api";
import {
	startLoadingFriends,
	endLoadingFriends,
} from "../Reducers/loadingsReducer";
import { setFriends } from "../Reducers/friendsReducer";

export const loadFriendsThunk = (friendsCount, currentPage) => {
	return async (dispatch) => {
		dispatch(startLoadingFriends());

		const friends = await api.getFriends(friendsCount, currentPage);

		dispatch(setFriends(friends));

		dispatch(endLoadingFriends());
	};
};
