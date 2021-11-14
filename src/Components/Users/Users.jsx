import React from "react";

import { SectionHeader } from "../Shared";
import { UsersListItemConnect } from "./UsersListItemConnect/UsersListItemConnect";
import { UsersListConnect } from "./UsersListConnect/UsersListConnect";
import { PagesListConnect } from "./PagesList/PagesListConnect";

import UsersStyle from "./Users.module.css";

export const Users = ({ usersCount, className }) => {
	return (
		<main className={`${className ?? ""} ${UsersStyle.users}`}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersListConnect
				className={UsersStyle.list}
				Card={UsersListItemConnect}
				usersCount={usersCount}
			/>
			<PagesListConnect usersCount={usersCount} />
		</main>
	);
};
