import { REG_PASSWORD_INPUT } from "../../ActionsConstants";

export const regPasswordInput = (password) => {
	return {
		type: REG_PASSWORD_INPUT,
		password,
	};
};
