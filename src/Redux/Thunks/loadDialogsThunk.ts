import { api } from "../../DAL/api";
import { setDialogs } from "../Reducers/dialogsReducer";
import {
	endLoadingDialogs,
	startLoadingDialogs,
} from "../Reducers/loadingsReducer";

export const loadDialogsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingDialogs());
			const response = await api.getDialogs();

			dispatch(setDialogs(response));

			dispatch(endLoadingDialogs());
		} catch (e) {
			console.log(e.message);
		}
	};
};
