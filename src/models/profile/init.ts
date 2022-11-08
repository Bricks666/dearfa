import { sample } from 'effector';
import { profileApi } from '@/api';
import {
	closeUpdateInfoPopup,
	closeUpdatePhotoPopup,
	closeUpdateStatusPopup,
} from '../routing';
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
	clock: ProfileGate.state,
	target: [getInfoQuery.start, getStatusQuery.start],
});

sample({
	clock: updateInfoMutation.finished.success,
	source: getInfoQuery.$data,
	filter: Boolean,
	fn: (info, { params }) => {
		return {
			...info,
			...params,
		};
	},
	target: getInfoQuery.$data,
});

sample({
	clock: updateInfoMutation.finished.success,
	target: closeUpdateInfoPopup,
});

sample({
	clock: updateStatusMutation.finished.success,
	fn: ({ params }) => {
		return params.status;
	},
	target: getStatusQuery.$data,
});

sample({
	clock: updateStatusMutation.finished.success,
	target: closeUpdateStatusPopup,
});

sample({
	clock: updatePhotoMutation.finished.success,
	source: getInfoQuery.$data,
	filter: Boolean,
	fn: (info, { data }) => {
		return {
			...info,
			photos: data.data.photos,
		};
	},
	target: getInfoQuery.$data,
});

sample({
	clock: updatePhotoMutation.finished.success,
	target: closeUpdatePhotoPopup,
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

getInfoQuery.$data.watch(console.debug);
