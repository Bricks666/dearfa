import { LOGOUT } from "./loginReducer";
import { initialState } from "../initialState";

const SET_USER_INFO = "dearFa/profile/SET_INFO";

export default function reducer(state = initialState.profile, action) {
	switch (action.type) {
		case SET_USER_INFO: {
			return { ...state, ...action.payload };
		}
		case LOGOUT: {
			return initialState.profile;
		}
		default:
			return state;
	}
}

export const setUserInfo = (info) => {
	return {
		type: SET_USER_INFO,
		payload: info,
	};
};
