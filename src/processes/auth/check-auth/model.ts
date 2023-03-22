import { redirect } from 'atomic-router';
import { sample } from 'effector';
import { pageModel } from '@/entities/app';
import { authUserModel } from '@/entities/auth-user';
import { routes } from '@/shared/configs';

sample({
	clock: pageModel.mounted,
	target: authUserModel.query.start,
});

redirect({
	clock: authUserModel.query.finished.failure,
	route: routes.login,
});
