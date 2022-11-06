// eslint-disable-next-line import/no-extraneous-dependencies
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { LoginRequest } from '@/api/auth';
import { StandardServerResponse } from '@/types';
import { AuthUser } from './types';

const LoginDomain = createDomain();

export const $authUser = LoginDomain.store<AuthUser | null>(null);
export const $isAuth = $authUser.map((state) => !!state);

export const authFx = LoginDomain.effect<
	void,
	StandardServerResponse<AuthUser>
>();
export const loginFx = LoginDomain.effect<
	LoginRequest,
	StandardServerResponse<void>
>();
export const logoutFx = LoginDomain.effect<void, StandardServerResponse>();

export const AuthGate = createGate({
	domain: LoginDomain,
});
