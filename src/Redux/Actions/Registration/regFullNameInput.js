import { REG_FULLNAME_INPUT } from "../../ActionsConstants";

export const regFullNameInput = (fullName) => {
	return {
		type: REG_FULLNAME_INPUT,
		fullName,
	};
};
