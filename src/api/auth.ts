import { StandardServerResponse } from '@/types';
import { URL } from '@/types';
import {
	makeDeleteRequest,
	makeGetRequest,
	makePostRequest,
} from './makeRequest';
import { AuthUser } from '@/models/auth';

const baseURL: URL = 'auth/';

export const auth = async () => {
	return makeGetRequest<StandardServerResponse<AuthUser>>(`${baseURL}me`);
};

export interface LoginRequest {
	readonly email: string;
	readonly password: string;
	readonly rememberMe: boolean;
}

export const login = async (credentials: LoginRequest) => {
	return makePostRequest<StandardServerResponse<void>, LoginRequest>(
		`${baseURL}login`,
		credentials
	);
};

export const logout = async () => {
	return makeDeleteRequest<StandardServerResponse>(`${baseURL}login`);
};
