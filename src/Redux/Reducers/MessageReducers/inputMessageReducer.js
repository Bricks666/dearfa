import { INPUT_MESSAGE } from "../../ActionsConstants";

export const inputMessageReducer = (state, action) => {
	if (action.type === INPUT_MESSAGE) {
		if (Boolean(state[0].newMessageContent) === false && action.text === " ") {
			return state;
		}

		const newState = [...state];

		newState[0] = {
			...state[0],
			newMessageContent: {
				...state[0].newMessageContent,
			},
		};

		newState[0].newMessageContent.text = action.text;

		return newState;
	}

	return state;
};
