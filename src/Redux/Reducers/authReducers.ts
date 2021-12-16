import {
	AuthActions,
	AuthActionTypes,
	IAuthState,
	ResetAuthAC,
	SetAuthAC,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.auth,
	action: AuthActions
): IAuthState {
	switch (action.type) {
		case AuthActionTypes.AUTH: {
			return {
				...state,
				...action.payload,
			};
		}
		case AuthActionTypes.RESET: {
			return initialState.auth;
		}
		default: {
			return state;
		}
	}
}

export const setAuth: SetAuthAC = (data) => {
	return {
		type: AuthActionTypes.AUTH,
		payload: {
			userId: data.id,
			login: data.login,
		},
	};
};

export const resetAuth: ResetAuthAC = () => {
	return {
		type: AuthActionTypes.RESET,
	};
};
