import { sample } from 'effector';
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
