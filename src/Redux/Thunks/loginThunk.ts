import { login } from "../../Api";
import { authThunk } from "./authThunk";
import { LoginThunk } from "../../Types/Redux";

export const loginThunk: LoginThunk = (email, password, rememberMe) => {
	return async (dispatch) => {
		try {
			const { messages, resultCode } = await login({
				email,
				password,
				rememberMe,
			});

			if (resultCode !== 0) {
				throw new Error(messages[0]);
			}

			dispatch(authThunk());
		} catch (e) {
			console.log(e);
		}
	};
};
