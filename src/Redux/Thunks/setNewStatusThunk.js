import { setNewStatus } from "../Actions/Me/setNewStatus";
import { newStatus } from "../../DAL/api";

export const setNewStatusThunk = (status) => {
	return async (dispatch) => {
		try {
			const response = await newStatus(status);
			console.log(response);
			if (response.resultCode === 0) {
				dispatch(setNewStatus(status));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};
