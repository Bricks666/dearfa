import React, { FC } from "react";
import { List } from "../Shared";
import { useLoading, useParamChangeListener, useUsersList } from "../../Hooks";
import { UserListCard } from "./UserListCard";
import { IOnlyClassComponent } from "../../Types/Common";
import { IUser } from "../../Types/Redux";

export const UsersList: FC<IOnlyClassComponent> = ({ className }) => {
	const { users, loadUsers } = useUsersList();
	const LoadingWrapper = useLoading("loadingUsers");
	useParamChangeListener("page", loadUsers);
	return (
		<LoadingWrapper>
			<List<IUser> className={className} items={users} Card={UserListCard} />
		</LoadingWrapper>
	);
};
