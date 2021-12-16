import React, { FC } from "react";

import classNames from "classnames";
import { SectionHeader } from "../Shared";
import { UsersPagesList } from "./PagesList/UsersPagesList";
import { UsersList } from "./UsersList/UsersList";

import UsersStyle from "./Users.module.css";
import { IOnlyClassComponent } from "../../Types/Common";

export const Users: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(UsersStyle.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList className={UsersStyle.list} />
			<UsersPagesList />
		</main>
	);
};
