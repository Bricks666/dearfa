import {
	ProfileActionTypes,
	ProfileActions,
	SetInfoAC,
	ResetProfileAC,
	SetNewPhotosAC,
	SetNewStatusAC,
	IProfileState,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.profile,
	action: ProfileActions
): IProfileState {
	switch (action.type) {
		case ProfileActionTypes.SET_INFO: {
			return { ...state, ...action.payload };
		}
		case ProfileActionTypes.SET_NEW_STATUS: {
			return {
				...state,
				status: action.payload.status,
			};
		}
		case ProfileActionTypes.SET_NEW_PHOTOS: {
			return {
				...state,
				photos: action.payload.photos,
			};
		}
		case ProfileActionTypes.RESET: {
			return initialState.profile;
		}
		default:
			return state;
	}
}

export const setInfo: SetInfoAC = (info) => {
	return {
		type: ProfileActionTypes.SET_INFO,
		payload: info,
	};
};

export const setNewStatus: SetNewStatusAC = (status) => {
	return {
		type: ProfileActionTypes.SET_NEW_STATUS,
		payload: {
			status,
		},
	};
};
export const setNewPhotos: SetNewPhotosAC = (photos) => {
	return {
		type: ProfileActionTypes.SET_NEW_PHOTOS,
		payload: {
			photos,
		},
	};
};

export const resetProfile: ResetProfileAC = () => {
	return {
		type: ProfileActionTypes.RESET,
	};
};
