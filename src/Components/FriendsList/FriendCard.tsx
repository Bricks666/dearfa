import React, { FC, useMemo } from "react";
import { useIsFollowing, useUnfollow } from "../../Hooks";
import { IFriendComponent } from "../../Types/Components";
import { UserCard } from "../Shared";

export const FriendCard: FC<IFriendComponent> = ({
	className,
	id,
	name,
	status,
	photos,
	followed,
	uniqueUrlName,
}) => {
	const user = useMemo(() => {
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
