import { update } from '@farfetched/core';
import { sample } from 'effector';
import { not } from 'patronum';
import { createMessageModel } from '@/features/messages';
import { messagesModel } from '@/entities/messages';
import { FETCH_COUNT } from '@/shared/configs';
import { $hasId, currentRoute, paramsAndQueryLoaded } from './page';

sample({
	clock: [currentRoute.opened, currentRoute.updated, paramsAndQueryLoaded],
	filter: $hasId,
	fn: ({ params, }) => {
		console.log('filter pass');
		return {
			dialogId: params.id!,
			page: 1,
			count: FETCH_COUNT,
		};
	},
	target: messagesModel.query.start,
});

sample({
	clock: [currentRoute.updated, paramsAndQueryLoaded],
	filter: not($hasId),
	target: messagesModel.query.reset,
});

sample({
	clock: createMessageModel.form.formValidated,
	source: currentRoute.$params,
	filter: $hasId,
	fn: (params, form) => {
		return {
			dialogId: Number(params.id),
			body: form.body,
		};
	},
	target: createMessageModel.mutation.start,
});

update(messagesModel.query, {
	on: createMessageModel.mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					result: {
						items: [],
						error: null,
						totalCount: 0,
					},
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			return {
				result: {
					items: [...query.result.items, mutation.result.data.message],
					error: null,
					totalCount: query.result.totalCount + 1,
				},
			};
		},
	},
});
