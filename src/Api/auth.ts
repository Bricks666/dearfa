import {
	GetAuth,
	IAuthResponse,
	ILoginRequest,
	ILoginResponse,
	IStandardServerResponse,
	Login,
	Logout,
} from "../Types/Api";
import { URL } from "../Types/Common";
import {
	makeDeleteRequest,
	makeGetRequest,
	makePostRequest,
} from "./makeRequest";

const baseURL: URL = "auth/";

export const getAuth: GetAuth = async () => {
	return (
		await makeGetRequest<IStandardServerResponse<IAuthResponse>>(baseURL + "me")
	).data;
};

export const login: Login = async (credentials) => {
	return (
		await makePostRequest<
			IStandardServerResponse<ILoginResponse>,
			ILoginRequest
		>(baseURL + "login", credentials)
	).data;
};

export const logout: Logout = async () => {
	return (await makeDeleteRequest<IStandardServerResponse>(baseURL + "login"))
		.data;
};
