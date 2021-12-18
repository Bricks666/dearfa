import { URLorNull, DateType } from "../Types/Common";
import { IDialog } from "../Types/Redux";
import {
	CurrentDialogSelector,
	GetCurrentDialogSelector,
	StandardSelector,
} from "../Types/Selectors";

export const getDialogs: StandardSelector<IDialog[]> = (state) => {
	return state.dialogs;
};

export const getCurrentDialogs: GetCurrentDialogSelector = (
	state,
	dialogId
) => {
	return getDialogs(state).find((dialog) => dialog.id == dialogId);
};

export const getCompanionPhoto: CurrentDialogSelector<URLorNull> = (
	currentDialog
) => {
	return currentDialog.photos.small;
};

export const getCompanionId: CurrentDialogSelector<number> = (
	currentDialog
) => {
	return currentDialog.id;
};

export const getCompanionName: CurrentDialogSelector<string> = (
	currentDialog
) => {
	return currentDialog.userName;
};
export const getCompanionLastActive: CurrentDialogSelector<DateType> = (
	currentDialog
) => {
	return currentDialog.lastUserActivityDate;
};
