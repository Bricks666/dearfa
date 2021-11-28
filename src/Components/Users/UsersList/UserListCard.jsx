import React, { useMemo } from "react";

import { UserCard } from "../../Shared";
import { useFollow, useIsFollowing, useUnfollow } from "../../../Hooks";

export const UserListCard = ({
	className,
	id,
	followed,
	name,
	status,
	photos,
}) => {
	const user = useMemo(() => {
		return {
			id,
			name,
			status,
			photos,
			followed,
		};
	}, [id, status, name, photos, followed]);
	const { follow } = useFollow(user);
	const { unfollow } = useUnfollow(id);
	const isFollowing = useIsFollowing(id);

	return (
		<UserCard
			className={className}
			user={user}
			onClick={followed ? unfollow : follow}
			isFollowing={isFollowing}
		/>
	);
};
