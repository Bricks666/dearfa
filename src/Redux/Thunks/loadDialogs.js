import { api } from "../../DAL/api";
import { setDialogs } from "../Reducers/dialogsReducer";

export const loadDialogs = () => {
	return async (dispatch) => {
		try {
			const response = await api.getDialogs();

			dispatch(setDialogs(response));
		} catch (e) {
			console.log(e.message);
		}
	};
};
