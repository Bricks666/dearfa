import { URL } from "@/interfaces/common";
import { makeGetRequest } from "./makeRequest";

const baseURL: URL = "security/";

export interface IGetCaptchaResponse {
	readonly url: URL;
}

export const getCaptchaURLApi = async () => {
	return await makeGetRequest<IGetCaptchaResponse>(baseURL + "get-captcha-url");
};
