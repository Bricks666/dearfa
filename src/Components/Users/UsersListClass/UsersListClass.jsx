import React, { useCallback } from "react";
import { withLoading } from "../../Shared/withLoading/withLoading";
import { UsersList } from "../../Shared/UsersList/UsersList";
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
		useCallback((page) => {
			loadUsers(usersCount, page);
		}, [])
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
