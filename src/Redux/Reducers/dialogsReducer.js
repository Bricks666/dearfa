import { LOGOUT } from "./loginReducer";
import { initialState } from "../initialState";

const SET_DIALOGS = "dearFa/dialogs/SET_DIALOGS";
const START_DIALOG = "dearFa/dialogs/START_DIALOG";

export default function reducer(state = initialState.dialogs, action) {
	switch (action.type) {
		case SET_DIALOGS: {
			return [...action.payload];
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

export const setDialogs = (dialogs) => {
	return {
		type: SET_DIALOGS,
		payload: dialogs,
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
