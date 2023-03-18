import { createHistoryRouter, redirect } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { controls, routes } from '@/shared/configs';

const router = createHistoryRouter({
	routes: [
		{
			path: '/login',
			route: routes.login,
		},
		{
			path: '/registration',
			route: routes.registration,
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
