import { redirect } from 'atomic-router';
import { logoutModel } from '@/features/auth';
import { routes } from '@/shared/configs';

redirect({
	clock: logoutModel.mutation.finished.success,
	route: routes.login,
});
