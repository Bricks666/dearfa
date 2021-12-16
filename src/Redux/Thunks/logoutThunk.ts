import { logout as logoutApi } from "../../Api";
import { LogoutThunk } from "../../Types/Redux";
import { logout } from "../Reducers/loginReducer";

export const logoutThunk: LogoutThunk = () => {
	return async (dispatch) => {
		try {
			const response = await logoutApi();

			if (response.resultCode === 0) {
				dispatch(logout());
			}
		} catch (e) {
			console.log(e);
		}
	};
};
