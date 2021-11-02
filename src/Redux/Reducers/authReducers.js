import { initialState } from "../initialState";
import { LOGOUT } from "./loginReducer";

export const AUTH = "dearFa/auth/AUTH";

const SET_ME = "dearFa/auth/SET_ME";
const SET_STATUS = "dearFa/auth/SET_STATUS";
const SET_PHOTOS = "dearFa/auth/SET_PHOTOS";

export default function reducer(state = initialState.auth, action) {
	switch (action.type) {
		case AUTH: {
			return {
				...state,
				...action.payload,
			};
		}
		case SET_ME: {
			return {
				...state,
				...action.payload.me,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.payload.newStatus,
			};
		}
		case SET_PHOTOS: {
			return {
				...state,
				photos: action.payload,
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

export const setMe = (me) => {
	return {
		type: SET_ME,
		payload: {
			me,
		},
	};
};

export const setNewStatus = (newStatus) => {
	return {
		type: SET_STATUS,
		payload: {
			newStatus,
		},
	};
};
export const setPhotos = (photos) => {
	return {
		type: SET_PHOTOS,
		payload: {
			...photos,
		},
	};
};
