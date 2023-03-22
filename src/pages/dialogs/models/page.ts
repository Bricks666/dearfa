import { routes } from '@/shared/configs';
import { createPageLoadModel } from '@/shared/lib';

export const { $isLoaded, currentRoute, loaded, paramsAndQueryLoaded, } =
	createPageLoadModel(routes.dialogs);

export const $id = currentRoute.$params.map((params) => params.id ?? null);
export const $hasId = $id.map((id) => Boolean(id));
