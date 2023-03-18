import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { AuthUser, LoginRequest, LoginResponse } from '@/shared/api';
import { StandardServerResponse } from '@/types';

const LoginDomain = createDomain();

export const $authUser = LoginDomain.store<AuthUser | null>(null);
export const $isAuth = $authUser.map((state) => !!state);

export const authFx = LoginDomain.effect<
	void,
	StandardServerResponse<AuthUser>
>();
export const loginFx = LoginDomain.effect<
	LoginRequest,
	StandardServerResponse<LoginResponse>
>();
export const logoutFx = LoginDomain.effect<void, StandardServerResponse>();

export const AuthGate = createGate({
	domain: LoginDomain,
});
