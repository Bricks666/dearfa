import { sample } from 'effector';
import { loginModel } from '@/features/auth';
import { routes } from '@/shared/configs';

sample({
	clock: loginModel.mutation.finished.success,
	fn: ({ result, }) => {
		return {
			params: { id: result.data.userId, },
			query: {},
		};
	},
	target: routes.profile.navigate,
});
