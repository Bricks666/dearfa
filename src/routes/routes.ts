import * as React from 'react';
import { URL, CommonProps } from '@/types';

interface Routes {
	readonly Component: React.ComponentType<CommonProps>;
	readonly path: URL;
	readonly onlyAuth?: boolean;
}

const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));
const ProfilePage = React.lazy(() => import('../pages/ProfilePage'));
const DialogsPage = React.lazy(() => import('../pages/DialogsPage'));
const UsersPage = React.lazy(() => import('../pages/UsersPage'));
const FriendsPage = React.lazy(() => import('../pages/FriendsPage'));
const NewsPage = React.lazy(() => import('../pages/NewsPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

export const routes: Routes[] = [
	{
		Component: LoginPage,
		path: '/login',
	},
	{
		Component: RegistrationPage,
		path: '/registration',
	},
	{
		Component: ProfilePage,
		path: '/profile/:id',
		onlyAuth: true,
	},
	{
		Component: DialogsPage,
		path: '/dialogs/*',
		onlyAuth: true,
	},
	{
		Component: UsersPage,
		path: '/users/:page',
		onlyAuth: true,
	},
	{
		Component: FriendsPage,
		path: '/friends/:page',
		onlyAuth: true,
	},
	{
		Component: NewsPage,
		path: '/news',
	},
	{
		Component: NotFoundPage,
		path: '*',
	},
];
