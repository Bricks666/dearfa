import { REG_PASSWORD_AGAIN_INPUT } from "../../ActionsConstants";

export const regPasswordAgainInput = (passwordAgain) => {
	return {
		type: REG_PASSWORD_AGAIN_INPUT,
		passwordAgain,
	};
};
