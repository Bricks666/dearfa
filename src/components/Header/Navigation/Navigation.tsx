import React, { FC } from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { Drawer } from "@mui/material";
import { StandardProps } from "@/interfaces/components";

import NavigationStyle from "./Navigation.module.css";

const navigationItems = [
	{
		path: "/profile/",
		text: "Профиль",
		id: 1,
	},
	{
		path: "/dialogs",
		text: "Сообщения",
		id: 2,
	},
	{
		path: "/friends/1",
		text: "Друзья",
		id: 3,
	},
	{
		path: "/news",
		text: "Новости",
		id: 4,
	},
	{
		path: "/music",
		text: "Музыка",
		id: 5,
	},
	{
		path: "/users/1",
		text: "Пользователи",
		id: 6,
	},
	{
		path: "/settings",
		text: "Настройки",
		id: 7,
	},
];

export const Navigation: FC<StandardProps> = ({ className }) => {
	return (
		<Drawer>
			<ul className={NavigationStyle.list}>
				{navigationItems.map((navigationItem) => (
					<NavigationItem
						to={navigationItem.path}
						text={navigationItem.text}
						key={navigationItem.id}
					/>
				))}
			</ul>
		</Drawer>
	);
};
