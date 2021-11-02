import { api } from "../../DAL/api";
import {
	startFollowingUser,
	endFollowingUser,
} from "../Reducers/loadingsReducer";
import { unfollowUser } from "../Reducers/usersReducer";

export const unfollowFriendThunk = (userId) => {
	return async (dispatch) => {
		dispatch(startFollowingUser(userId));

		const response = await api.unfollow(userId);

		if (response.resultCode === 0) {
			dispatch(unfollowUser(userId));
		}

		dispatch(endFollowingUser(userId));
	};
};
