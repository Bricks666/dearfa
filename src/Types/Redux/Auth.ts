export interface IAuthState {
	userId: number;
	login: string;
}

export enum AuthActionTypes {
	AUTH = "dearFa/auth/AUTH",
	RESET = "dearFa/auth/RESET",
}

interface ISetAuthAction {
	type: AuthActionTypes.AUTH;
	payload: IAuthState;
}
interface IResetAuth {
	type: AuthActionTypes.RESET;
}

export type AuthActions = ISetAuthAction | IResetAuth;

interface ISetAuthData {
	id: number;
	login: string;
}

export type SetAuthAC = (data: ISetAuthData) => ISetAuthAction;
export type ResetAuthAC = () => IResetAuth;
