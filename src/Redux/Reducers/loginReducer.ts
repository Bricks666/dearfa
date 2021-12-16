import {
	ILoginState,
	LoginAC,
	LoginActions,
	LoginActionTypes,
	LogoutAC,
	SetCaptchaAC,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.login,
	action: LoginActions
): ILoginState {
	switch (action.type) {
		case LoginActionTypes.LOGIN: {
			return {
				...state,
				isLogin: true,
				captchaURL: null,
			};
		}
		case LoginActionTypes.LOGOUT: {
			return initialState.login;
		}
		case LoginActionTypes.SET_CAPTCHA: {
			return {
				...state,
				captchaURL: action.payload.captchaURL,
			};
		}
		default: {
			return state;
		}
	}
}

export const logout: LogoutAC = () => {
	return {
		type: LoginActionTypes.LOGOUT,
	};
};

export const setCaptcha: SetCaptchaAC = (captchaURL) => {
	return {
		type: LoginActionTypes.SET_CAPTCHA,
		payload: {
			captchaURL,
		},
	};
};

export const login: LoginAC = () => {
	return {
		type: LoginActionTypes.LOGIN,
	};
};
