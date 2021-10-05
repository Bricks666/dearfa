import { getUsers } from "../../DAL/api";
import { startLoadingUsers } from "../Actions/Loadings/startLoadingUsers";
import { setUsers } from "../Actions/Users/setUsers";
import { endLoadingUsers } from "../Actions/Loadings/endLoadingUsers";

export const setUsersThunk = (usersCount, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingUsers());

			const users = await getUsers(usersCount, page);

			dispatch(setUsers(users));
			dispatch(endLoadingUsers());
		} catch (e) {
			console.log(e.message);
		}
	};
};
