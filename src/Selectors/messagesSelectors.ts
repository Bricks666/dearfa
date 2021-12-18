import { IMessagesState } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";
import { GetDialogMessages } from "../Types/Selectors/Messages";

export const getMessages: StandardSelector<IMessagesState> = (state) => {
	return state.messages;
};

export const getDialogMessages: GetDialogMessages = (state, dialogId) => {
	return getMessages(state)[+dialogId] || [];
};
