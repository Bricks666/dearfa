import { api } from "../../DAL/api";
import { logout } from "../Reducers/loginReducer";

export const logoutThunk = () => {
	return async (dispatch) => {
		try {
			const response = await api.logoutApi();

			if (response.resultCode === 0) {
				dispatch(logout());
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};
