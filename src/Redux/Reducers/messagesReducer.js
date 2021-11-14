import { initialState } from "../initialState";

const INIT_MESSAGES = "dearFa/messages/INIT_MESSAGES";
const SET_MESSAGES = "dearFa/messages/SET_MESSAGES";
const ADD_MESSAGE = "dearFa/messages/ADD_MESSAGE";

export default function reducer(state = initialState.messages, action) {
	switch (action.type) {
		case INIT_MESSAGES: {
			if (state[action.payload.dialogId] !== undefined) {
				return state;
			}

			return {
				...state,
				[action.payload.dialogId]: [],
			};
		}
		case SET_MESSAGES: {
			return {
				...state,
				[action.payload.dialogId]: action.payload.messages,
			};
		}
		case ADD_MESSAGE: {
			return {
				...state,
				[action.payload.dialogId]: [
					...state[action.payload.dialogId],
					action.payload.message,
				],
			};
		}
		default: {
			return state;
		}
	}
}

export const initialMessages = (dialogId) => {
	return {
		type: INIT_MESSAGES,
		payload: {
			dialogId,
		},
	};
};

export const setMessages = (dialogId, messages) => {
	return {
		type: SET_MESSAGES,
		payload: {
			dialogId,
			messages,
		},
	};
};

export const addMessage = (dialogId, message) => {
	return {
		type: ADD_MESSAGE,
		payload: {
			dialogId,
			message,
		},
	};
};
