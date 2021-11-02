import { initialState } from "../initialState";
import { LOGOUT } from "./loginReducer";

const REG_PASSWORD_INPUT = "dearFa/registration/INPUT_PASSWORD";
const REG_PASSWORD_AGAIN_INPUT = "dearFa/registration/INPUT_PASSWORD_AGAIN";
const REG_FULLNAME_INPUT = "dearFa/registration/INPUT_FULLNAME";
const REG_EMAIL_INPUT = "dearFa/registration/INPUT_EMAIL";

export default function reducer(state = initialState.registration, action) {
	switch (action.type) {
		case REG_FULLNAME_INPUT: {
			return {
				...state,
				fullName: action.payload.fullName,
			};
		}
		case REG_EMAIL_INPUT: {
			return {
				...state,
				email: action.payload.email,
			};
		}
		case REG_PASSWORD_INPUT: {
			return {
				...state,
				password: action.payload.password,
			};
		}
		case REG_PASSWORD_AGAIN_INPUT: {
			return {
				...state,
				passwordAgain: action.payload.passwordAgain,
			};
		}
		case LOGOUT: {
			return initialState.registration;
		}
		default: {
			return state;
		}
	}
}

export const regEmailInput = (email) => {
	return {
		type: REG_EMAIL_INPUT,
		payload: {
			email,
		},
	};
};

export const regFullNameInput = (fullName) => {
	return {
		type: REG_FULLNAME_INPUT,
		payload: {
			fullName,
		},
	};
};

export const regPasswordAgainInput = (passwordAgain) => {
	return {
		type: REG_PASSWORD_AGAIN_INPUT,
		payload: {
			passwordAgain,
		},
	};
};

export const regPasswordInput = (password) => {
	return {
		type: REG_PASSWORD_INPUT,
		payload: {
			password,
		},
	};
};
