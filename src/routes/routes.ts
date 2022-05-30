import { ComponentType } from "react";
import {
	DialogsPage,
	FriendsPage,
	LoginPage,
	NewsPage,
	ProfilePage,
	RegistrationPage,
	UsersPage,
	NotFoundPage,
} from "@/pages";
import { URL } from "@/interfaces/common";
import { StandardProps } from "@/interfaces/components";

interface Routes {
	readonly Component: ComponentType<StandardProps>;
	readonly path: URL;
}

export const routes: Routes[] = [
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
