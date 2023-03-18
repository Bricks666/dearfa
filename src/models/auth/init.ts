import { redirect } from 'atomic-router';
import { sample } from 'effector';
import { authApi } from '@/shared/api';
import { routes } from '@/shared/configs';
import { authQuery, loginMutation, logoutMutation } from './queries';
import { $authUser, authFx, AuthGate, loginFx, logoutFx } from './units';

authFx.use(authApi.auth);
loginFx.use(authApi.login);
logoutFx.use(authApi.logout);

sample({
	clock: authQuery.finished.success,
	fn: (response) => response.result.data,
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
	clock: AuthGate.state,
	target: authQuery.start,
});

redirect({
	clock: [logoutMutation.finished.success, authQuery.finished.failure],
	route: routes.login,
});

redirect({
	clock: loginMutation.finished.success,
	params: ({ result, }) => {
		const {
			data: { userId, },
		} = result;
		return {
			id: userId,
		};
	},
	route: routes.profile,
});
