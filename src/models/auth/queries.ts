import { createMutation, createQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { LoginRequest } from '@/api/auth';
import { StandardServerResponse, getStandardServerResponse } from '@/types';
import { authFx, loginFx, logoutFx } from './units';
import { authUser, AuthUser, LoginResponse, loginResponse } from './types';

export const authQuery = createQuery<
	void,
	StandardServerResponse<AuthUser>,
	Error,
	StandardServerResponse<AuthUser>
>({
	effect: authFx,
	contract: runtypeContract(getStandardServerResponse(authUser)),
});

export const loginMutation = createMutation<
	LoginRequest,
	StandardServerResponse<LoginResponse>,
	StandardServerResponse<LoginResponse>,
	Error
>({
	effect: loginFx,
	contract: runtypeContract(getStandardServerResponse(loginResponse)),
});

export const logoutMutation = createMutation({
	effect: logoutFx,
});
