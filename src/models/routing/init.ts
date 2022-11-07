import { sample } from 'effector';
import { querySync } from 'atomic-router';
import { controls } from '@/routes';
import { getParams, popups } from '@/consts';
import { $popup, closeUpdateInfoPopup, closePopup } from './units';

querySync({
	controls,
	source: {
		[getParams.popups]: $popup,
	},
});

sample({
	clock: closeUpdateInfoPopup,
	fn: () => popups.updateInfo,
	target: closePopup,
});

sample({
	clock: closePopup,
	source: $popup,
	fn: (popup, name) => popup.replaceAll(name, ''),
	target: $popup,
});
