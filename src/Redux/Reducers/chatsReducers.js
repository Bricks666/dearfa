import { ADD_MESSAGE, INPUT_MESSAGE, LOGOUT } from "../ActionsConstants";
import { initialState } from "../initialState";

const createMessage = (id, content) => {
	return {
		authorId: 1,
		content,
		id,
	};
};

export const chatsReducers = (state = initialState.chats, action) => {
	switch (action.type) {
	case ADD_MESSAGE: {
		const newState = [...state];
		const value = { ...newState[0].newMessageContent };
		if (Boolean(value) === false || Boolean(value.text) === false) {
			return state;
		}
		const newMessage = createMessage(newState[0].messages.length + 1, value);
		newState[0] = {
			...state[0],
			messages: [...state[0].messages, newMessage],
			newMessageContent: null,
		};
		return newState;
	}
	case INPUT_MESSAGE: {
		if (
			Boolean(state[0].newMessageContent) === false &&
			action.text === " "
		) {
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
	case LOGOUT: {
		return initialState.chats;
	}
	default: {
		return state;
	}
	}
};
