import { IStandardServerResponse } from ".";

export interface IAuthResponse {
	id: number;
	login: string;
}

export interface ILoginResponse {
	userId: number;
}
export interface ILoginRequest {
	email: string;
	password: string;
	rememberMe: boolean;
}

export type GetAuth = () => Promise<IStandardServerResponse<IAuthResponse>>;

export type Login = (
	credentials: ILoginRequest
) => Promise<IStandardServerResponse<ILoginResponse>>;

export type Logout = () => Promise<IStandardServerResponse>;
