import React, { useCallback } from "react";
import { UsersList, withLoading } from "../../Shared";
import { useParamChangeListener } from "../../../Hooks/useParamChangeListener";

const WithLoading = withLoading(UsersList);

export const UsersListClass = ({
	Card,
	isLoading,
	className,
	users,
	usersCount,
	loadUsers,
}) => {
	useParamChangeListener(
		"page",
		useCallback(
			(page) => {
				loadUsers(usersCount, page);
			},
			[usersCount]
		)
	);

	return (
		<WithLoading
			className={className}
			Card={Card}
			users={users}
			isLoading={isLoading}
		/>
	);
};
