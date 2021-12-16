import {
	IMessagesState,
	MessagesActions,
	MessagesActionTypes,
	ResetMessagesAC,
	SetMessagesAC,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.messages,
	action: MessagesActions
): IMessagesState {
	switch (action.type) {
		case MessagesActionTypes.SET_MESSAGES: {
			return {
				...state,
				[action.payload.dialogId]: [
					...state[action.payload.dialogId],
					...action.payload.messages,
				],
			};
		}
		case MessagesActionTypes.RESET: {
			return initialState.messages;
		}
		default: {
			return state;
		}
	}
}

export const setMessages: SetMessagesAC = (dialogId, messages) => {
	return {
		type: MessagesActionTypes.SET_MESSAGES,
		payload: {
			dialogId,
			messages,
		},
	};
};

export const resetMessages: ResetMessagesAC = () => {
	return {
		type: MessagesActionTypes.RESET,
	};
};
