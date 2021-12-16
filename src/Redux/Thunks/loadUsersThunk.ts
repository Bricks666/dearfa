import { getUsers } from "../../Api";
import { LoadUsersThunk } from "../../Types/Redux";
import {
	startLoadingUsers,
	endLoadingUsers,
} from "../Reducers/loadingsReducer";
import { setUsers } from "../Reducers/usersReducer";

export const loadUsersThunk: LoadUsersThunk = (usersCount, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingUsers());

			const users = await getUsers(usersCount, page);

			dispatch(setUsers(users));
			dispatch(endLoadingUsers());
		} catch (e) {
			console.log(e);
		}
	};
};
