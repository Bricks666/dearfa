import { logoutApi } from "../../DAL/api";
import { logout } from "../Actions/Auth/logout";

export const logoutThunk = () => {
	return async (dispatch) => {
		try {
			const response = await logoutApi();

			if (response.resultCode === 0) {
				dispatch(logout());
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};
