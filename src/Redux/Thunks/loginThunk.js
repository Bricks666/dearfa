import { api } from "../../DAL/api";
import { authThunk } from "./authThunk";

import { FORM_ERROR } from "final-form";

export const loginThunk = (email, password, remember, restart, anything) => {
	return async (dispatch) => {
		try {
			const { messages, resultCode } = await api.loginApi(
				email,
				password,
				remember
			);

			if (resultCode !== 0) {
				throw new Error(messages[0]);
			}

			dispatch(authThunk());
			restart();
		} catch (e) {
			console.log(e.message);
			anything({ [FORM_ERROR]: e.message });
		}
	};
};
