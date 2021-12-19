import { GetCaptchaURL, IGetCaptchaResponse } from "../Types/Api";
import { URL } from "../Types/Common";
import { makeGetRequest } from "./makeRequest";

const baseURL: URL = "security/";

export const getCaptchaURL: GetCaptchaURL = async () => {
	return (
		await makeGetRequest<IGetCaptchaResponse>(baseURL + "get-captcha-url")
	).data;
};
