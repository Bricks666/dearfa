import { sample } from 'effector';
import { profileInfoModel, profileStatusModel } from '@/entities/profile';
import { currentRoute, paramsAndQueryLoaded } from './page';

sample({
	clock: [currentRoute.updated, currentRoute.opened, paramsAndQueryLoaded],
	fn: ({ params, }) => {
		return {
			id: params.id,
		};
	},
	target: [profileInfoModel.query.start, profileStatusModel.query.start],
});
