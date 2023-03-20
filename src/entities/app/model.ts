import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';

const page = createDomain();

export const mounted = page.event();
export const unmounted = page.event();
export const $isMounted = page.store(false);

export const Gate = createGate();

sample({
	clock: Gate.open,
	target: mounted,
});

sample({
	clock: Gate.close,
	target: unmounted,
});

sample({
	clock: mounted,
	fn: () => true,
	target: $isMounted,
});

sample({
	clock: unmounted,
	fn: () => false,
	target: $isMounted,
});
