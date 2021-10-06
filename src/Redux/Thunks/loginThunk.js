import { loginApi } from "../../DAL/api";
import { authThunk } from "./authThunk";

export const loginThunk = () => {
	return async (dispatch, getState) => {
		const email = getState().login.email;
		const password = getState().login.password;
		const rememberMe = getState().login.isRemember;

		try {
			const response = await loginApi(email, password, rememberMe);

			if (response.resultCode === 0) {
				dispatch(authThunk());
			}

		} catch (e) {
			console.log(e.message);
		}
	};
};
