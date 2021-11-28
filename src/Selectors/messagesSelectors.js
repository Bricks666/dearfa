export const getMessages = (state) => {
	return state.messages;
};

export const getDialogMessages = (state, dialogId) => {
	return getMessages(state)[dialogId] || [];
};
