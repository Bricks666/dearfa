import { getDialogs } from "../../Api";
import { LoadDialogsThunk } from "../../Types/Redux";
import { setDialogs } from "../Reducers/dialogsReducer";
import {
	endLoadingDialogs,
	startLoadingDialogs,
} from "../Reducers/loadingsReducer";

export const loadDialogsThunk: LoadDialogsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingDialogs());
			const response = await getDialogs();

			dispatch(setDialogs(response));

			dispatch(endLoadingDialogs());
		} catch (e) {
			console.log(e);
		}
	};
};
