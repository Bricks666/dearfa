import { getAuth } from "../../DAL/api";
import { startLoadingAuth } from "../Actions/Loadings/startLoadingAuth";
import { setAuth } from "../Actions/Auth/setAuth";
import { endLoadingAuth } from "../Actions/Loadings/endLoadingAuth";

export const authThunk = () => {
	return async (dispatch) => {
		dispatch(startLoadingAuth());

		const response = await getAuth();

		if (response.resultCode === 0) {
			dispatch(setAuth(response.data));
		}

		dispatch(endLoadingAuth());
	};
};
