import { querySync } from 'atomic-router';
import { sample } from 'effector';
import { controls, GET_PARAMS, POPUP_NAMES } from '@/shared/configs';
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
		[GET_PARAMS.popups]: $popup,
	},
	cleanup: true,
});

sample({
	clock: closeUpdateInfoPopup,
	fn: () => POPUP_NAMES.updateInfo,
	target: closePopup,
});

sample({
	clock: closeUpdateStatusPopup,
	fn: () => POPUP_NAMES.updateStatus,
	target: closePopup,
});

sample({
	clock: closeUpdatePhotoPopup,
	fn: () => POPUP_NAMES.updatePhoto,
	target: closePopup,
});

sample({
	clock: closePopup,
	source: $popup,
	fn: (popup, name) => popup.replaceAll(name, ''),
	target: $popup,
});
