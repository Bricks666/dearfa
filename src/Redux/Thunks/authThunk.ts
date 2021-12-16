import { getAuth } from "../../Api";
import { startLoadingAuth, endLoadingAuth } from "../Reducers/loadingsReducer";
import { setAuth } from "../Reducers/authReducers";
import { AuthThunk } from "../../Types/Redux";

export const authThunk: AuthThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAuth());

			const response = await getAuth();

			if (response.resultCode === 0) {
				dispatch(setAuth(response.data));
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			console.log(e?.message);
		} finally {
			dispatch(endLoadingAuth());
		}
	};
};
