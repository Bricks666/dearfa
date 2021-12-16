import { getCaptchaURL } from "../../Api";
import { GetCaptchaThunk } from "../../Types/Redux";
import { setCaptcha } from "../Reducers/loginReducer";

export const getCaptchaThunk: GetCaptchaThunk = () => {
	return async (dispatch) => {
		try {
			const response = await getCaptchaURL();
			dispatch(setCaptcha(response.url));
		} catch (e) {
			console.log(e);
		}
	};
};
