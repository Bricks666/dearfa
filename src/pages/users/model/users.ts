import { update } from '@farfetched/core';
import { sample } from 'effector';
import { followModel, unfollowModel } from '@/features/following';
import { usersModel } from '@/entities/users';
import { FETCH_COUNT } from '@/shared/configs';
import { pageLoadModel } from './page';

sample({
	clock: [
		pageLoadModel.currentRoute.updated,
		pageLoadModel.currentRoute.opened,
		pageLoadModel.paramsAndQueryLoaded
	],
	fn: ({ params, }) => {
		return {
			page: params.page,
			count: FETCH_COUNT,
		};
	},
	target: usersModel.query.start,
});

update(usersModel.query, {
	on: followModel.mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					result: { error: null, items: [], totalCount: 0, },
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
				result: {
					error: query.result.error,
					totalCount: query.result.totalCount,
					items: query.result.items.map((user) =>
						user.id === mutation.params.userId
							? { ...user, followed: true, }
							: user
					),
				},
			};
		},
	},
});

update(usersModel.query, {
	on: unfollowModel.mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					result: { error: null, items: [], totalCount: 0, },
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
				result: {
					error: query.result.error,
					totalCount: query.result.totalCount,
					items: query.result.items.map((user) =>
						user.id === mutation.params.userId
							? { ...user, followed: false, }
							: user
					),
				},
			};
		},
	},
});
