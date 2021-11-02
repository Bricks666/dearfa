import { api } from "../../DAL/api";
import {
	startLoadingProfile,
	endLoadingProfile,
} from "../Reducers/loadingsReducer";
import { setUserInfo } from "../Reducers/profileReducer";

export const loadUserThunk = (id) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingProfile());

			const user = await api.getProfile(id);
			dispatch(setUserInfo(user));

			dispatch(endLoadingProfile());
		} catch (e) {
			console.log(e.message);
		}
	};
};
