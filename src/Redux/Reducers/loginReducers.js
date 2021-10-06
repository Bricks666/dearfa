import { initialState } from "../initialState";
import {
	LOGIN_CHECKBOX_TOGGLE,
	LOGIN_EMAIL_INPUT,
	LOGIN_PASSWORD_INPUT,
	LOGOUT,
} from "../ActionsConstants";

export const loginReducers = (state = initialState.login, action) => {
	switch (action.type) {
	case LOGIN_EMAIL_INPUT: {
		return {
			...state,
			email: action.email,
		};
	}
	case LOGIN_PASSWORD_INPUT: {
		return {
			...state,
			password: action.password,
		};
	}
	case LOGIN_CHECKBOX_TOGGLE: {
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
};
