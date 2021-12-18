import React, { FC, useMemo } from "react";

import { UserCard } from "../Shared";
import { useFollow, useIsFollowing, useUnfollow } from "../../Hooks";
import { IUser } from "../../Types/Redux";
import { IOnlyClassComponent } from "../../Types/Common";

interface IUserCard extends IUser, IOnlyClassComponent {}

export const UserListCard: FC<IUserCard> = ({
	className,
	id,
	followed,
	name,
	status,
	photos,
	uniqueUrlName,
}) => {
	const user: IUser = useMemo(() => {
		return {
			id,
			name,
			status,
			photos,
			followed,
			uniqueUrlName,
		};
	}, [id, status, name, photos, followed, uniqueUrlName]);
	const { follow } = useFollow(user);
	const { unfollow } = useUnfollow(id);
	const isFollowing = useIsFollowing(id);
	console.log(followed);

	return (
		<UserCard
			className={className}
			user={user}
			onClick={followed ? unfollow : follow}
			isFollowing={isFollowing}
		/>
	);
};
