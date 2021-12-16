import { DateType, IPhotos } from "../Common";

export interface IDialog {
	userName: string;
	id: number;
	photos: IPhotos;
	lastUserActivityDate: DateType;
}

export enum DialogsActionTypes {
	SET_DIALOGS = "dearFa/dialogs/SET_DIALOGS",
	RESET = "dearFa/dialogs/RESET",
}

interface ISetDialogsAction {
	type: DialogsActionTypes.SET_DIALOGS;
	payload: IDialog[];
}

interface IResetDialogsAction {
	type: DialogsActionTypes.RESET;
}

export type DialogsActions = ISetDialogsAction | IResetDialogsAction;

export type SetDialogsAC = (dialogs: IDialog[]) => ISetDialogsAction;

export type ResetDialogsAC = () => IResetDialogsAction;
