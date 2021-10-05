import { startLoadingUsers } from "../Actions/Loadings/startLoadingUsers";
import { endLoadingUsers } from "../Actions/Loadings/endLoadingUsers";
import { nextUsersPage } from "../Actions/Users/nextUsersPage";
import { getUsers } from "../../DAL/api";

export const nextUsersPageThunk = (usersCount, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingUsers());

			const users = await getUsers(usersCount, page);

			dispatch(nextUsersPage(users.items, page));

			dispatch(endLoadingUsers());
		} catch (e) {
			console.log(e.message);
		}
	};
};
