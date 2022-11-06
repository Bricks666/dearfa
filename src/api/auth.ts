import { StandardServerResponse } from '@/interfaces/responses';
import { URL } from '@/interfaces/common';
import {
	makeDeleteRequest,
	makeGetRequest,
	makePostRequest,
} from './makeRequest';

const baseURL: URL = 'auth/';

export interface AuthResponse {
	readonly id: number;
	readonly login: string;
}

export const getAuthApi = async () => {
	return await makeGetRequest<StandardServerResponse<AuthResponse>>(
		`${baseURL}me`
	);
};

export interface LoginResponse {
	readonly userId: number;
}
export interface LoginRequest {
	readonly email: string;
	readonly password: string;
	readonly rememberMe: boolean;
}

export const loginApi = async (credentials: LoginRequest) => {
	return await makePostRequest<
		StandardServerResponse<LoginResponse>,
		LoginRequest
	>(`${baseURL}login`, credentials);
};

export const logoutApi = async () => {
	return await makeDeleteRequest<StandardServerResponse>(`${baseURL}login`);
};
