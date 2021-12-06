import { api } from "../../DAL/api";
import { startLoadingUsers, endLoadingUsers } from "../Reducers/loadingsReducer";
import { setUsers } from "../Reducers/usersReducer";

export const loadUsersThunk = (usersCount, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingUsers());

			const users = await api.getUsers(usersCount, page);

			dispatch(setUsers(users));
			dispatch(endLoadingUsers());
		} catch (e) {
			console.log(e.message);
		}
	};
};
