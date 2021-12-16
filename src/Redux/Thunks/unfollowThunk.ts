import { unfollow } from "../../Api";
import { UnfollowThunk } from "../../Types/Redux";
import {
	startFollowingUser,
	endFollowingUser,
} from "../Reducers/loadingsReducer";
import { unfollowUser } from "../Reducers/usersReducer";

export const unfollowThunk: UnfollowThunk = (userId) => {
	return async (dispatch) => {
		dispatch(startFollowingUser(userId));

		const response = await unfollow(userId);

		if (response.resultCode === 0) {
			dispatch(unfollowUser(userId));
		}

		dispatch(endFollowingUser(userId));
	};
};
