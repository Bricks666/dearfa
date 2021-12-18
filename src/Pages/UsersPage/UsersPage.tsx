import React, { FC } from "react";
import classNames from "classnames";
import { IOnlyClassComponent } from "../../Types/Common";
import { PagesListWithRouting, SectionHeader } from "../../Components/Shared";
import { UsersList } from "../../Components/UsersList";
import { useUsersPageCount } from "../../Hooks";

import UsersPageStyle from "./UsersPage.module.css";

export const UsersPage: FC<IOnlyClassComponent> = ({ className }) => {
	const pageCount = useUsersPageCount();

	return (
		<main className={classNames(UsersPageStyle.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList className={UsersPageStyle.list} />
			<PagesListWithRouting pageCount={pageCount} />
		</main>
	);
};
