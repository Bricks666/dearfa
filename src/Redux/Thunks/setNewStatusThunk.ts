import { updateStatus } from "../../Api";
import { SetNewStatusThunk } from "../../Types/Redux";
import { setNewStatus } from "../Reducers/profileReducer";

export const setNewStatusThunk: SetNewStatusThunk = (status) => {
	return async (dispatch) => {
		try {
			const response = await updateStatus(status);

			if (response.resultCode === 0) {
				dispatch(setNewStatus(status));
			}
		} catch (e) {
			console.log(e);
		}
	};
};
