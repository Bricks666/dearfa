import { createDomain, sample } from 'effector';
import { not } from 'patronum';
import { $popups, closePopup, openPopup } from './model';

export const createPopupControlModel = (name: string) => {
	const domain = createDomain(`${name}-popup-control`);

	const $isOpen = $popups.map((popups) => popups.includes(name));

	const open = domain.event();
	const opened = domain.event();
	const close = domain.event();
	const closed = domain.event();

	sample({
		clock: open,
		fn: () => name,
		target: openPopup,
	});

	sample({
		clock: close,
		fn: () => name,
		target: closePopup,
	});

	sample({
		clock: $isOpen,
		filter: $isOpen,
		target: opened,
	});

	sample({
		clock: $isOpen,
		filter: not($isOpen),
		target: closed,
	});

	return {
		$isOpen,
		close,
		open,
		opened,
		closed,
	};
};
