import { instance, StandardServerResponse } from '../request';
import { AuthUser, LoginRequest, LoginResponse } from './types';

const baseURL = 'auth';

export const auth = async () => {
	return instance.get(`${baseURL}/me`).json<StandardServerResponse<AuthUser>>();
};

export const login = async (body: LoginRequest) => {
	return instance
		.post(`${baseURL}/login`, {
			json: body,
		})
		.json<StandardServerResponse<LoginResponse>>();
};

export const logout = async () => {
	return instance.delete(`${baseURL}/login`).json<StandardServerResponse>();
};
