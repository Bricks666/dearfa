import { LOGOUT } from "./loginReducer";
import { initialState } from "../initialState";

const SET_INFO = "dearFa/profile/SET_INFO";
const SET_NEW_STATUS = "dearFa/profile/SET_NEW_STATUS";
const SET_NEW_PHOTOS = "dearFa/profile/SET_NEW_PHOTOS";

export default function reducer(state = initialState.profile, action) {
	switch (action.type) {
		case SET_INFO: {
			return { ...state, ...action.payload.info };
		}
		case SET_NEW_STATUS: {
			return {
				...state,
				status: action.payload.status,
			};
		}
		case SET_NEW_PHOTOS: {
			return {
				...state,
				photos: action.payload.photos,
			};
		}
		case LOGOUT: {
			return initialState.profile;
		}
		default:
			return state;
	}
}

export const setProfile = (info) => {
	return {
		type: SET_INFO,
		payload: {
			info,
		},
	};
};

export const setNewStatus = (status) => {
	return {
		type: SET_NEW_STATUS,
		payload: {
			status,
		},
	};
};
export const setNewPhotos = (photos) => {
	return {
		type: SET_NEW_PHOTOS,
		payload: {
			photos,
		},
	};
};
