import { api } from "../../DAL/api";
import {
	startFollowingUser,
	endFollowingUser,
} from "../Reducers/loadingsReducer";
import { followUser } from "../Reducers/usersReducer";

export const followThunk = (user) => {
	return async (dispatch) => {
		try {
			dispatch(startFollowingUser(user.id));

			const response = await api.follow(user.id);
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
