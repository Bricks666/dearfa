import { initialState } from "../initialState";
import { LOGOUT } from "./loginReducer";

export const AUTH = "dearFa/auth/AUTH";

export default function reducer(state = initialState.auth, action) {
	switch (action.type) {
		case AUTH: {
			return {
				...state,
				...action.payload,
			};
		}
		case LOGOUT: {
			return initialState.auth;
		}
		default: {
			return state;
		}
	}
}

export const setAuth = (data) => {
	return {
		type: AUTH,
		payload: {
			userId: data.id,
			login: data.login,
		},
	};
};
