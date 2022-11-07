import { RouteInstance } from 'atomic-router';
import { useStoreMap } from 'effector-react';

export const useParam = <T extends object>(
	route: RouteInstance<T>,
	paramName: keyof T
) => {
	return useStoreMap({
		store: route.$params,
		fn: (params, [name]) => params[name],
		keys: [paramName],
	});
};
