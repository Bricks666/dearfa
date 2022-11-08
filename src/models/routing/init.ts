import { sample } from 'effector';
import { querySync, redirect } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { newsRoute } from '@/routes';
import { getParams, popups } from '@/consts';
import {
	$popup,
	closeUpdateInfoPopup,
	closePopup,
	router,
	controls,
	closeUpdateStatusPopup,
	closeUpdatePhotoPopup,
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

redirect({
	clock: router.routeNotFound,
	route: newsRoute,
});

router.setHistory(createBrowserHistory());
