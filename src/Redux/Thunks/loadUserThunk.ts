import { getProfile } from "../../Api";
import { LoadUserThunk } from "../../Types/Redux";
import {
	startLoadingProfile,
	endLoadingProfile,
} from "../Reducers/loadingsReducer";
import { setInfo } from "../Reducers/profileReducer";

export const loadUserThunk: LoadUserThunk = (id) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingProfile());

			const user = (await getProfile(id)).data;

			dispatch(setInfo(user));

			dispatch(endLoadingProfile());
		} catch (e) {
			console.log(e);
		}
	};
};
