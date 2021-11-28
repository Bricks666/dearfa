import React from "react";

import classNames from "classnames";
import { SectionHeader } from "../Shared";
import { UsersPagesList } from "./PagesList/UsersPagesList";
import { UsersList } from "./UsersList/UsersList";

import UsersStyle from "./Users.module.css";

export const Users = ({ className }) => {
	return (
		<main className={classNames(UsersStyle.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList className={UsersStyle.list} />
			<UsersPagesList />
		</main>
	);
};
