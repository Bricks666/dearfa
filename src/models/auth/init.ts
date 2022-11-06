import { sample } from 'effector';
import { authApi } from '@/api';
import { authQuery, loginMutation, logoutMutation } from './queries';
import { $authUser, authFx, AuthGate, loginFx, logoutFx } from './units';

authFx.use(authApi.auth);
loginFx.use(authApi.login);
logoutFx.use(authApi.logout);

sample({
	clock: authQuery.finished.success,
	fn: (response) => response.data.data,
	target: $authUser,
});

sample({
	clock: loginMutation.finished.success,
	target: authQuery.start,
});

sample({
	clock: [logoutMutation.finished.success],
	fn: () => null,
	target: $authUser,
});

sample({
	clock: AuthGate.open,
	target: authQuery.start,
});
