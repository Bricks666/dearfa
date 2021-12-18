import {
	IAuthResponse,
	ILoginRequest,
	ILoginResponse,
	IStandardServerResponse,
} from "../Types/Api";
import { URL } from "../Types/Common";
import {
	makeDeleteRequest,
	makeGetRequest,
	makePostRequest,
} from "./makeRequest";

const baseURL: URL = "auth/";

export const getAuth = async () => {
	return (
		await makeGetRequest<IStandardServerResponse<IAuthResponse>>(baseURL + "me")
	).data;
};

export const login = async (credentials: ILoginRequest) => {
	return (
		await makePostRequest<
			IStandardServerResponse<ILoginResponse>,
			ILoginRequest
		>(baseURL + "login", credentials)
	).data;
};

export const logout = async () => {

	return (await makeDeleteRequest<IStandardServerResponse>(baseURL + "login"))
		.data;
};
