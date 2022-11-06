import { ComponentType, lazy } from 'react';

import { URL } from '@/interfaces/common';
import { StandardProps } from '@/interfaces/components';

interface Routes {
	readonly Component: ComponentType<StandardProps>;
	readonly path: URL;
	readonly onlyAuth?: boolean;
}

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const DialogsPage = lazy(() => import('../pages/DialogsPage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const FriendsPage = lazy(() => import('../pages/FriendsPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

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
