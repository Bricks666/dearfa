import { unfollow } from "../../DAL/api";
import { endFollowingUser } from "../Actions/Loadings/endFollowingUser";
import { startFollowingUser } from "../Actions/Loadings/startFollowingUser";
import { unfollowUser } from "../Actions/Users/unfollowUser";

export const unfollowUserThunk = (userId) => {
	return async (dispatch) => {
		dispatch(startFollowingUser());

		const response = await unfollow(userId);

		if (response.resultCode === 0) {
			dispatch(unfollowUser(userId));
		}

		dispatch(endFollowingUser(userId));
	};
};
