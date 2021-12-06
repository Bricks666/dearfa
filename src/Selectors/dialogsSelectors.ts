export const getDialogs = (state) => {
	return state.dialogs;
};

export const getCurrentDialogs = (state, targetDialogId) => {
	return getDialogs(state).find((dialog) => dialog.id === +targetDialogId);
};

export const getCompanionPhoto = (currentDialog) => {
	return currentDialog?.photos?.small;
};

export const getCompanionId = (currentDialog) => {
	return currentDialog?.id;
};

export const getCompanionName = (currentDialog) => {
	return currentDialog?.userName;
};
export const getCompanionLastActive = (currentDialog) => {
	return currentDialog?.lastUserActivityDate;
};
