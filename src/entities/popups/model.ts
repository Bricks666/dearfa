import { querySync } from 'atomic-router';
import { createDomain, sample } from 'effector';
import { controls, GET_PARAMS } from '@/shared/configs';

const popups = createDomain();

export const $popups = popups.store<string>('');

export const openPopup = popups.event<string>();
export const closePopup = popups.event<string>();

sample({
	clock: openPopup,
	source: $popups,
	fn: (popups, popup) => {
		return `${popups},${popup}`;
	},
	target: $popups,
});

sample({
	clock: closePopup,
	source: $popups,
	fn: (popups, popup) => {
		return popups.replaceAll(popup, '');
	},
	target: $popups,
});

querySync({
	controls,
	source: {
		[GET_PARAMS.popups]: $popups,
	},
});
