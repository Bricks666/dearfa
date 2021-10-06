import React from "react";

import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { UsersListItemContainer } from "./UsersListItemContainer/UsersListItemContainer";
import { UsersListContainer } from "./UsersListContainer/UsersListContainer";
import { PagesListContainer } from "./PagesList/PagesListContainer";

import UsersStyle from "./Users.module.css";

export const Users = (props) => {
	return (
		<main className={`${props.className ?? ""} ${UsersStyle.users}`}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersListContainer
				className={UsersStyle.list}
				render={(props) => <UsersListItemContainer {...props} />}
				usersCount={props.usersCount}
			/>
			<PagesListContainer usersCount={props.usersCount} />
		</main>
	);
};
