import { update } from '@farfetched/core';
import { sample } from 'effector';
import { updateInfoModel } from '@/features/profile';
import { profileInfoModel, profileStatusModel } from '@/entities/profile';
import { $id, paramsAndQueryLoaded } from './page';

sample({
	clock: [$id.updates, paramsAndQueryLoaded],
	fn: (routeOrId) => {
		if (typeof routeOrId === 'object') {
			return {
				id: routeOrId.params.id,
			};
		}
		return {
			id: routeOrId,
		};
	},
	target: [profileInfoModel.query.start, profileStatusModel.query.start],
});

sample({
	clock: [
		updateInfoModel.popup.opened,
		profileInfoModel.query.finished.success
	],
	source: profileInfoModel.query.$data,
	target: updateInfoModel.form.setForm,
});

update(profileInfoModel.query, {
	on: updateInfoModel.mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					refresh: true,
					result: null as any,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refresh: true,
				};
			}

			return {
				result: { ...query.result, ...mutation.params, },
				refetch: false,
			};
		},
	},
});
