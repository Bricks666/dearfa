import { IGetCaptchaResponse } from "../Types/Api";
import { URL } from "../Types/Common";
import { makeGetRequest } from "./makeRequest";

const baseURL: URL = "security/";

export const getCaptchaURL = async () => {
	return (
		await makeGetRequest<IGetCaptchaResponse>(baseURL + "get-captcha-url")
	).data;
};
