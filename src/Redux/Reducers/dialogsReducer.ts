import { initialState } from "../initialState";
import {
	DialogsActionTypes,
	IDialog,
	DialogsActions,
	SetDialogsAC,
	ResetDialogsAC,
} from "../../Types/Redux";

export default function reducer(
	state = initialState.dialogs,
	action: DialogsActions
): IDialog[] {
	switch (action.type) {
		case DialogsActionTypes.SET_DIALOGS: {
			return [...action.payload];
		}		case DialogsActionTypes.RESET: {
			return initialState.dialogs;
		}
		default: {
			return state;
		}
	}
}

export const setDialogs: SetDialogsAC = (dialogs) => {
	return {
		type: DialogsActionTypes.SET_DIALOGS,
		payload: dialogs,
	};
};
export const resetDialogs: ResetDialogsAC = () => {
	return {
		type: DialogsActionTypes.RESET,
	};
};
