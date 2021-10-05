import { REG_EMAIL_INPUT } from "../../ActionsConstants";

export const regEmailInput = (email) => {
	return {
		type: REG_EMAIL_INPUT,
		email,
	};
};
