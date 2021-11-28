import { api } from "../../DAL/api";
import { setNewStatus } from "../Reducers/profileReducer";

export const setNewStatusThunk = (status) => {
	return async (dispatch) => {
		try {
			const response = await api.newStatus(status);

			if (response.resultCode === 0) {
				dispatch(setNewStatus(status));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};
