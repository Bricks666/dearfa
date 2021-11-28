import { api } from "../../DAL/api";
import { setCaptcha } from "../Reducers/loginReducer";

export const getCaptcha = () => {
	return async (dispatch) => {
		try {
			const { url: captchaUrl } = await api.getCaptcha();
			dispatch(setCaptcha(captchaUrl));
		} catch (e) {
			console.log(e.message);
		}
	};
};
