import { URL, URLorNull } from "../Common";

export interface ILoginState {
	isLogin: boolean;
	captchaURL: URLorNull;
}

export enum LoginActionTypes {
	LOGOUT = "dearFa/login/LOGOUT",
	SET_CAPTCHA = "dearFa/login/SET_CAPTCHA",
	LOGIN = "dearFa/login/LOGIN",
}

interface ILoginAction {
	type: LoginActionTypes.LOGIN;
}

interface ISetCaptchaPayload {
	captchaURL: URL;
}

interface ISetCaptchaAction {
	type: LoginActionTypes.SET_CAPTCHA;
	payload: ISetCaptchaPayload;
}

interface ILogoutAction {
	type: LoginActionTypes.LOGOUT;
}

export type LoginActions = ILoginAction | ISetCaptchaAction | ILogoutAction;

export type LoginAC = () => ILoginAction;
export type SetCaptchaAC = (captchaURL: URL) => ISetCaptchaAction;
export type LogoutAC = () => ILogoutAction;
