import React from "react";

import { renderUsersList } from "./RenderUsersList";

import UsersListStyle from "./UsersList.module.css";

export const UsersList = (props) => {
	return (
		<ul className={`${UsersListStyle.list} ${props.className ?? ""}`}>
			{renderUsersList(props.Card, props.users, [])}
		</ul>
	);
};
