import { AUTH, LOGOUT, SET_ME, SET_NEW_STATUS } from "../ActionsConstants";
import { initialState } from "../initialState";

export const authReducers = (state = initialState.auth, action) => {
	switch (action.type) {
	case AUTH: {
		return {
			...state,
			...action.data,
		};
	}
	case SET_ME: {
		return {
			...state,
			...action.me,
		};
	}
	case SET_NEW_STATUS: {
		return {
			...state,
			status: action.newStatus
		};
	}
	case LOGOUT: {
		return initialState.auth;
	}
	default: {
		return state;
	}
	}
};
