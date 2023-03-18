import { createRoute, createRouterControls } from 'atomic-router';

export const routes = {
	login: createRoute(),
	registration: createRoute(),
	profile: createRoute<{ id: number }>(),
	dialogs: createRoute<{ id?: number }>(),
	users: createRoute<{ page: number }>(),
	friends: createRoute<{ page: number }>(),
	news: createRoute(),
};

export const controls = createRouterControls();
