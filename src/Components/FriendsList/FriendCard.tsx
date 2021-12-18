import React, { FC, useMemo } from "react";
import { useIsFollowing, useUnfollow } from "../../Hooks";
import { IOnlyClassComponent } from "../../Types/Common";
import { IUser } from "../../Types/Redux";
import { UserCard } from "../Shared";

interface IFriendCard extends IOnlyClassComponent, IUser {}

export const FriendCard: FC<IFriendCard> = ({
	className,
	id,
	name,
	status,
	photos,
	followed,
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
	}, [id, name, status, photos, followed, uniqueUrlName]);
	const { unfollow } = useUnfollow(id);
	const isFollowing = useIsFollowing(id);

	return (
		<UserCard
			className={className}
			user={user}
			onClick={unfollow}
			isFollowing={isFollowing}
		/>
	);
};
