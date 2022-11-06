import { createMutation, createQuery } from '@farfetched/core';
import { StandardServerResponse } from '@/types';
import { authFx, loginFx, logoutFx } from './units';
import { AuthUser } from './types';

export const authQuery = createQuery<
	void,
	StandardServerResponse<AuthUser>,
	Error
>({
	effect: authFx,
});

export const loginMutation = createMutation({
	effect: loginFx,
});

export const logoutMutation = createMutation({
	effect: logoutFx,
});
