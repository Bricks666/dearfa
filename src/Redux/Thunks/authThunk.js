import { api } from "../../DAL/api";
import {
	startLoadingAuth,
	endLoadingAuth,
} from "../Reducers/loadingsReducer";
import { setAuth } from "../Reducers/authReducers";

export const authThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAuth());

			const response = await api.getAuth();

			if (response.resultCode === 0) {
				dispatch(setAuth(response.data));
			}
		} catch (e) {
			console.timeLog(e.message);
		} finally {
			dispatch(endLoadingAuth());
		}
	};
};
