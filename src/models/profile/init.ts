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
import { Info, ProfileInfo } from './types';

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
	source: [$profileInfo, getInfoQuery.$data, getStatusQuery.$data],
	fn: ([oldInfo, info, status]: [
		ProfileInfo,
		Info | null,
		string | null
	]): ProfileInfo => {
		return {
			...(info ?? oldInfo),
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
