import { URL } from "../Common";

export interface IGetCaptchaResponse {
	url: URL;
}

export type GetCaptchaURL = () => Promise<IGetCaptchaResponse>;
