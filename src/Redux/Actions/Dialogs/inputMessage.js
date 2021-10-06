import { INPUT_MESSAGE } from "../../ActionsConstants";

export const inputMessage = (text) => {
	return {
		type: INPUT_MESSAGE,
		text,
	};
};
