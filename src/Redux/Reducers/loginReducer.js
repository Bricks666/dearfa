import { initialState } from "../initialState";
import { AUTH } from "./authReducers";

export const LOGOUT = "LOGOUT";
const INPUT_EMAIL = "dearFa/login/INPUT_EMAIL";
const INPUT_PASSWORD = "dearFa/login/INPUT_PASSWORD";
const TOGGLE_CHECKBOX = "dearFa/login/TOGGLE_CHECKBOX";

export default function reducer(state = initialState.login, action) {
	switch (action.type) {
		case AUTH: {
			return {
				...state,
				isLogin: true,
			};
		}
		case INPUT_EMAIL: {
			return {
				...state,
				email: action.payload.email,
			};
		}
		case INPUT_PASSWORD: {
			return {
				...state,
				password: action.payload.password,
			};
		}
		case TOGGLE_CHECKBOX: {
			return {
				...state,
				isRemember: !state.isRemember,
			};
		}
		case LOGOUT: {
			return initialState.login;
		}
		default: {
			return state;
		}
	}
}

export const loginCheckboxToggle = () => {
	return {
		type: TOGGLE_CHECKBOX,
	};
};

export const loginEmailInput = (email) => {
	return {
		type: INPUT_EMAIL,
		payload: {
			email,
		},
	};
};

export const loginPasswordInput = (password) => {
	return {
		type: INPUT_PASSWORD,
		payload: {
			password,
		},
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};
