import * as React from 'react';
import { createRoute, RouteInstance } from 'atomic-router';
import { URL, CommonProps } from '@/types';

interface Route {
	readonly Component: React.ComponentType<CommonProps>;
	readonly path: URL;
	readonly route: RouteInstance<any>;
}

const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));
const ProfilePage = React.lazy(() => import('../pages/ProfilePage'));
const DialogsPage = React.lazy(() => import('../pages/DialogsPage'));
const UsersPage = React.lazy(() => import('../pages/UsersPage'));
const FriendsPage = React.lazy(() => import('../pages/FriendsPage'));
const NewsPage = React.lazy(() => import('../pages/NewsPage'));

export const loginRoute = createRoute();
export const registrationRoute = createRoute();
export const profileRoute = createRoute<{ id: number }>();
export const dialogsRoute = createRoute<{ id?: number }>();
export const usersRoute = createRoute<{ page: number }>();
export const friendsRoute = createRoute<{ page: number }>();
export const newsRoute = createRoute();
export const notFoundedRoute = createRoute();

export const routes: Route[] = [
	{
		Component: LoginPage,
		path: '/login',
		route: loginRoute,
	},
	{
		Component: RegistrationPage,
		path: '/registration',
		route: registrationRoute,
	},
	{
		Component: ProfilePage,
		path: '/profile/:id',
		route: profileRoute,
	},
	{
		Component: DialogsPage,
		path: '/dialogs/:id?',
		route: dialogsRoute,
	},
	{
		Component: UsersPage,
		path: '/users/:page',
		route: usersRoute,
	},
	{
		Component: FriendsPage,
		path: '/friends/:page',
		route: friendsRoute,
	},
	{
		Component: NewsPage,
		path: '/news',
		route: newsRoute,
	},
];
