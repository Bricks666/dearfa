import { URLorNull } from "../Types/Common";
import { DateType, IDialog } from "../Types/Redux";
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
	targetDialogId
) => {
	return getDialogs(state).find((dialog) => dialog.id === targetDialogId);
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
