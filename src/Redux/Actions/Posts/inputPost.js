import { INPUT_POST } from "../../ActionsConstants";

export const inputPost = (value) => {
	return {
		type: INPUT_POST,
		text: value,
	};
};
