import { initialState } from "../initialState";
import { AUTH } from "./authReducers";

export const LOGOUT = "LOGOUT";
const SHOW_CAPTCHA = "dearFa/login/SHOW_CAPTCHA";

export default function reducer(state = initialState.login, action) {
	switch (action.type) {
		case AUTH: {
			return {
				...state,
				isLogin: true,
				captchaUrl: null,
			};
		}
		case LOGOUT: {
			return initialState.login;
		}
		case SHOW_CAPTCHA: {
			return {
				...state,
				captchaUrl: action.payload.captchaUrl,
			};
		}
		default: {
			return state;
		}
	}
}

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

export const setCaptcha = (captchaUrl) => {
	return {
		type: SHOW_CAPTCHA,
		payload: {
			captchaUrl,
		},
	};
};
