import React from "react";

import { renderUsersList } from "./RenderUsersList";

import UsersListStyle from "./UsersList.module.css";

export const UsersList = ({ Card, users, className }) => {
	return (
		<ul className={`${UsersListStyle.list} ${className ?? ""}`}>
			{renderUsersList(Card, users, [])}
		</ul>
	);
};
