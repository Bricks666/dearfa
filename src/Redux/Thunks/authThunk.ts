import { getAuth } from "../../Api";
import { startLoadingAuth, endLoadingAuth } from "../Reducers/loadingsReducer";
import { setAuth } from "../Reducers/authReducers";
import { AuthThunk } from "../../Types/Redux";
import { login } from "../Reducers/loginReducer";
import { updateProfileURL } from "../Reducers/navigationReducer";

export const authThunk: AuthThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAuth());

			const response = await getAuth();

			if (response.resultCode === 0) {
				dispatch(setAuth(response.data));
				dispatch(login());
				dispatch(updateProfileURL(response.data.id));
			}
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(endLoadingAuth());
		}
	};
};
