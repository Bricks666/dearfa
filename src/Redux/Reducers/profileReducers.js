import { LOGOUT, SET_USER_INFO } from "../ActionsConstants";
import { initialState } from "../initialState";

export const profileReducers = (state = initialState.profile, action) => {
	switch (action.type) {
	case SET_USER_INFO: {
		return { ...state, ...action.info };
	}
	case LOGOUT: {
		return initialState.profile;
	}
	default:
		return state;
	}
};
