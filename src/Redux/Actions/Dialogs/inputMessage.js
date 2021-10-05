import { INPUT_MESSAGE } from "../../ActionsConstants";

export const inputMessageActionCreator = (text) => {
	return {
		type: INPUT_MESSAGE,
		text,
	};
};
