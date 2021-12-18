import { follow } from "../../Api";
import { FollowThunk } from "../../Types/Redux";
import {
	startFollowingUser,
	endFollowingUser,
} from "../Reducers/loadingsReducer";
import { followUser } from "../Reducers/usersReducer";

export const followThunk: FollowThunk = (user) => {
	return async (dispatch) => {
		try {
			dispatch(startFollowingUser(user.id));

			const response = await follow(user.id);
			debugger;
			if (response.resultCode === 0) {
				dispatch(followUser(user));
			}
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(endFollowingUser(user.id));
		}
	};
};
