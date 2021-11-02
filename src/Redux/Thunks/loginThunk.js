import { api } from "../../DAL/api";
import { authThunk } from "./authThunk";

export const loginThunk = () => {
	return async (dispatch, getState) => {
		const { email, password, rememberMe } = getState().login;

		try {
			const response = await api.loginApi(email, password, rememberMe);

			if (response.resultCode === 0) {
				dispatch(authThunk());
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};
