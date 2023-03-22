import { createRoutesView } from 'atomic-router-react';
import * as React from 'react';
import { routes } from '@/shared/configs';

const LoginPage = React.lazy(() => import('./login'));
const ProfilePage = React.lazy(() => import('./profile'));
const DialogsPage = React.lazy(() => import('./dialogs'));
const UsersPage = React.lazy(() => import('./users'));
const FriendsPage = React.lazy(() => import('./friends'));
const NewsPage = React.lazy(() => import('./news'));

const View = createRoutesView({
	routes: [
		{
			route: routes.login,
			view: LoginPage,
		},
		{
			route: routes.profile,
			view: ProfilePage,
		},
		{
			route: routes.dialogs,
			view: DialogsPage,
		},
		{
			route: routes.users,
			view: UsersPage,
		},
		{
			route: routes.friends,
			view: FriendsPage,
		},
		{
			route: routes.news,
			view: NewsPage,
		}
	],
});

export const Pages: React.FC = () => {
	return <View />;
};
