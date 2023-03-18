import { querySync } from 'atomic-router';
import { sample } from 'effector';
import { controls, getParams, popups } from '@/shared/configs';
import {
	$popup,
	closeUpdateInfoPopup,
	closePopup,
	closeUpdateStatusPopup,
	closeUpdatePhotoPopup
} from './units';

querySync({
	controls,
	source: {
		[getParams.popups]: $popup,
	},
	cleanup: true,
});

sample({
	clock: closeUpdateInfoPopup,
	fn: () => popups.updateInfo,
	target: closePopup,
});

sample({
	clock: closeUpdateStatusPopup,
	fn: () => popups.updateStatus,
	target: closePopup,
});

sample({
	clock: closeUpdatePhotoPopup,
	fn: () => popups.updatePhoto,
	target: closePopup,
});

sample({
	clock: closePopup,
	source: $popup,
	fn: (popup, name) => popup.replaceAll(name, ''),
	target: $popup,
});
