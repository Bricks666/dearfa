import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { postsModel } from '@/entities/posts';
import {
	CreatePostParams,
	getStandardServerResponse,
	postsApi,
	RTPost
} from '@/shared/api';

const createPost = createDomain();

const handlerFx = createPost.effect(postsApi.create);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTPost)),
});

export const form = createForm<CreatePostParams>({
	fields: {
		content: {
			init: '',
		},
	},
});

sample({
	clock: form.formValidated,
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

update(postsModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					refresh: true,
					result: [],
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refresh: true,
				};
			}

			return {
				result: [mutation.result.data, ...query.result],
				refetch: false,
			};
		},
	},
});
