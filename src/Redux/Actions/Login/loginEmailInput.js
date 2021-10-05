import { LOGIN_EMAIL_INPUT } from "../../ActionsConstants";

export const loginEmailInput = (email) => {
	return {
		type: LOGIN_EMAIL_INPUT,
		email,
	};
};
