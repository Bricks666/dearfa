import React from "react";
import { List } from "../../Shared";
import {
	useLoading,
	useParamChangeListener,
	useUsersList,
} from "../../../Hooks";
import { UserListCard } from "./UserListCard";

export const UsersList = ({ className }) => {
	const { users, loadUsers } = useUsersList();
	const { LoadingWrapper } = useLoading("loadingUsers");
	useParamChangeListener("page", loadUsers);
	return (
		<LoadingWrapper>
			<List className={className} items={users} Card={UserListCard} />
		</LoadingWrapper>
	);
};
