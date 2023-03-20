import { routes } from '@/shared/configs';
import { createPageLoadModel } from '@/shared/lib';

export const { $isLoaded, currentRoute, loaded, paramsAndQueryLoaded, } =
	createPageLoadModel(routes.profile);

export const $id = currentRoute.$params.map((params) => params.id);
