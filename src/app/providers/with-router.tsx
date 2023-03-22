import { createHistoryRouter, redirect } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { popupsModel } from '@/entities/popups';
import { controls, GET_PARAMS, routes } from '@/shared/configs';

const router = createHistoryRouter({
	routes: [
		{
			path: '/login',
			route: routes.login,
		},
		{
			path: '/profile/:id',
			route: routes.profile,
		},
		{
			path: '/users/:page',
			route: routes.users,
		},
		{
			path: '/friends/:page',
			route: routes.friends,
		},
		{
			path: '/dialogs/:id?',
			route: routes.dialogs,
		},
		{
			path: '/news',
			route: routes.news,
		}
	],
	controls,
});

redirect({
	clock: router.routeNotFound,
	route: routes.news,
});

/*
Иначе при старте страницы попапы не отображаются
*/
sample({
	clock: router.initialized,
	source: router.$query,
	fn: (query) => query[GET_PARAMS.popups] ?? '',
	target: popupsModel.$popups,
});

router.setHistory(createBrowserHistory());

export const WithRouter = (
	Component: React.ComponentType
): React.ComponentType => {
	return () => {
		return (
			<RouterProvider router={router}>
				<Component />
			</RouterProvider>
		);
	};
};
