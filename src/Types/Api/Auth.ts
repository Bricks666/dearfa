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
