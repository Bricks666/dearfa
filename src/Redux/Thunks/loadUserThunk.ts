import { api } from "../../DAL/api";
import {
	startLoadingProfile,
	endLoadingProfile,
} from "../Reducers/loadingsReducer";
import { setProfile } from "../Reducers/profileReducer";

export const loadUserThunk = (id) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingProfile());

			const user = await api.getProfile(id);

			dispatch(setProfile(user));

			dispatch(endLoadingProfile());
		} catch (e) {
			console.log(e.message);
		}
	};
};
