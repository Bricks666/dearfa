import { StandardSelector } from "../Types/Selectors";
import { IAuthState } from "../Types/Redux";

export const getAuth: StandardSelector<IAuthState> = (state) => {
	return state.auth;
};

export const getId: StandardSelector<number> = (state) => {
	return getAuth(state).userId;
};

export const getLogin: StandardSelector<string> = (state) => {
	return getAuth(state).login;
};
