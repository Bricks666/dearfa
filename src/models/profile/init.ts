import { sample } from 'effector';
import { profileApi } from '@/api';
import {
	getInfoQuery,
	getStatusQuery,
	updateInfoMutation,
	updatePhotoMutation,
	updateStatusMutation,
} from './queries';
import {
	$profileInfo,
	$profileInfoLoading,
	getInfoFx,
	getStatusFx,
	ProfileGate,
	updateInfoFx,
	updatePhotoFx,
	updateStatusFx,
} from './units';
import { ProfileInfo } from './types';

getInfoFx.use(profileApi.getInfo);
getStatusFx.use(profileApi.getStatus);
updateInfoFx.use(profileApi.updateInfo);
updatePhotoFx.use(profileApi.updatePhoto);
updateStatusFx.use(profileApi.updateStatus);

sample({
	clock: ProfileGate.open,
	target: [getInfoQuery.start, getStatusQuery.start],
});

sample({
	clock: updateInfoMutation.finished.success,
	source: getInfoQuery.$data,
	fn: (info, { data }) => {
		return {
			...info!,
			...data,
		};
	},
	target: getInfoQuery.$data,
});

sample({
	clock: updateStatusMutation.finished.success,
	fn: ({ params }) => {
		return params;
	},
	target: getStatusQuery.$data,
});

sample({
	clock: updatePhotoMutation.finished.success,
	source: getInfoQuery.$data,
	fn: (info, { data }) => {
		return {
			...info!,
			photos: data.data,
		};
	},
	target: getInfoQuery.$data,
});

sample({
	clock: getInfoQuery.$data,
	source: $profileInfo,
	fn: (oldInfo, info): ProfileInfo => {
		return {
			...oldInfo,
			...info,
		};
	},
	target: $profileInfo,
});

sample({
	clock: getStatusQuery.$data,
	source: $profileInfo,
	fn: (oldInfo, status): ProfileInfo => {
		return {
			...oldInfo,
			status: status ?? oldInfo.status,
		};
	},
	target: $profileInfo,
});

sample({
	source: [getInfoQuery.$pending, getStatusQuery.$pending],
	fn: ([infoLoading, statusLoading]): boolean => {
		return infoLoading || statusLoading;
	},
	target: $profileInfoLoading,
});
