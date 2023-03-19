import { sample } from 'effector';
import { messagesModel } from '@/entities/messages';
import { FETCH_COUNT } from '@/shared/configs';
import { pageLoadModel } from './page';

sample({
	clock: [
		pageLoadModel.currentRoute.opened,
		pageLoadModel.currentRoute.updated,
		pageLoadModel.paramsAndQueryLoaded
	],
	filter: ({ params, }) => Boolean(params.id),
	fn: ({ params, }) => {
		return {
			dialogId: params.id!,
			page: 1,
			count: FETCH_COUNT,
		};
	},
	target: messagesModel.query.start,
});

sample({
	clock: [
		pageLoadModel.currentRoute.updated,
		pageLoadModel.paramsAndQueryLoaded
	],
	filter: ({ params, }) => !params.id,
	target: messagesModel.query.reset,
});
