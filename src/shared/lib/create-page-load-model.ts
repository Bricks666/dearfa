import { RouteInstance, RouteParams, RouteParamsAndQuery } from 'atomic-router';
import { createEvent, createStore, sample } from 'effector';
import { not } from 'patronum';

export const createPageLoadModel = <T extends RouteParams>(
	route: RouteInstance<T>
) => {
	const $isLoaded = createStore(false);

	const loaded = createEvent();
	const paramsAndQueryLoaded = createEvent<RouteParamsAndQuery<T>>();

	sample({
		clock: loaded,
		source: { params: route.$params, query: route.$query, },
		filter: not($isLoaded),
		target: paramsAndQueryLoaded,
	});

	sample({
		clock: loaded,
		fn: () => true,
		target: $isLoaded,
	});

	return {
		$isLoaded,
		loaded,
		paramsAndQueryLoaded,
		currentRoute: route,
	};
};
