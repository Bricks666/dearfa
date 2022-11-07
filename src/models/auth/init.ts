import { sample } from 'effector';
import { redirect } from 'atomic-router';
import { authApi } from '@/api';
import { loginRoute, profileRoute } from '@/routes';
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
	clock: AuthGate.state,
	target: authQuery.start,
});

redirect({
	clock: [logoutMutation.finished.success, authQuery.finished.failure],
	route: loginRoute,
});

redirect({
	clock: loginMutation.finished.success,
	params: ({ data }) => {
		const {
			data: { userId },
		} = data;
		return {
			id: userId,
		};
	},
	route: profileRoute,
});
