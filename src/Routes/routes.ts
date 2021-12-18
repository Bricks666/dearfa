import {
	DialogsPage,
	FriendsPage,
	LoginPage,
	NewsPage,
	ProfilePage,
	RegistrationPage,
	UsersPage,
	NotFoundPage,
} from "../Pages";
import { IRoutes } from "./../Types/Routes/Routes";

export const routes: IRoutes[] = [
	{
		Component: LoginPage,
		path: "/login",
	},
	{
		Component: RegistrationPage,
		path: "/registration",
	},
	{
		Component: ProfilePage,
		path: "/profile/:id",
	},
	{
		Component: DialogsPage,
		path: "/dialogs/*",
	},
	{
		Component: UsersPage,
		path: "/users/:page",
	},
	{
		Component: FriendsPage,
		path: "/friends/:page",
	},
	{
		Component: NewsPage,
		path: "/news",
	},
	{
		Component: NotFoundPage,
		path: "*",
	},
];
