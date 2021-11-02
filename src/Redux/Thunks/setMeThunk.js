import { api } from "../../DAL/api";
import { endLoadingMe, startLoadingMe } from "../Reducers/loadingsReducer";
import { setMe } from "../Reducers/authReducers";

export const setMeThunk = (id) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingMe());

			const me = await api.getProfile(id);

			dispatch(setMe(me));

			dispatch(endLoadingMe());
		} catch (e) {
			console.log(e.message);
		}
	};
};
