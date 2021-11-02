import { LOGOUT } from "./loginReducer";
import { initialState } from "../initialState";

const INPUT_MESSAGE = "dearFa/dialogs/INPUT_MESSAGE";
const ADD_MESSAGE = "dearFa/dialogs/ADD_MESSAGE";
const SET_DIALOGS = "dearFa/dialogs/SET_DIALOGS";
const SET_MESSAGE = "dearFa/dialogs/SET_MESSAGE";
const START_DIALOG = "dearFa/dialogs/START_DIALOG";

export default function reducer(state = initialState.dialogs, action) {
	switch (action.type) {
		case SET_DIALOGS: {
			return [...action.payload.map((dialog) => ({ ...dialog, messages: [] }))];
		}
		/* 	case ADD_MESSAGE: {
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
	} */
		case SET_MESSAGE: {
			return state.map((dialog) => {
				if (dialog.id === action.payload.id) {
					return {
						...dialog,
						messages: action.payload.messages,
					};
				}
				return dialog;
			});
		}
		case INPUT_MESSAGE: {
			if (
				Boolean(state[0].newMessageContent) === false &&
				action.payload.text === " "
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
			newState[0].newMessageContent.text = action.payload.text;
			return newState;
		}
		case START_DIALOG: {
			return [
				state.find(action.payload.id),
				...state.filter((dialog) => dialog.id !== action.payload.id),
			];
		}
		case LOGOUT: {
			return initialState.dialogs;
		}
		default: {
			return state;
		}
	}
}

export const addMessage = () => {
	return {
		type: ADD_MESSAGE,
	};
};

export const inputMessage = (text) => {
	return {
		type: INPUT_MESSAGE,
		payload: {
			text,
		},
	};
};

export const setDialogs = (dialogs) => {
	return {
		type: SET_DIALOGS,
		payload: dialogs,
	};
};

export const setMessages = (id, messages) => {
	return {
		type: SET_MESSAGE,
		payload: {
			id,
			messages,
		},
	};
};

export const startDialog = (id) => {
	return {
		type: START_DIALOG,
		payload: {
			id,
		},
	};
};
