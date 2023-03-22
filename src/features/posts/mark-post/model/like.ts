import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { postsModel } from '@/entities/posts';
import { getStandardServerResponse, postsApi, RTPost } from '@/shared/api';

const like = createDomain();

const handlerFx = like.effect(postsApi.like);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTPost)),
});

update(postsModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					result: [],
					refetch: true,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			return {
				result: query.result.map((post) =>
					post.id === mutation.result.data.id ? mutation.result.data : post
				),
			};
		},
	},
});
