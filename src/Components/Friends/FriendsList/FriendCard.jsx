import React, { useMemo } from "react";
import { useIsFollowing, useUnfollow } from "../../../Hooks";
import { UserCard } from "../../Shared";

export const FriendCard = ({
	className,
	id,
	name,
	status,
	photos,
	followed,
}) => {
	const user = useMemo(() => {
		return {
			id,
			name,
			status,
			photos,
			followed,
		};
	}, [id, name, status, photos, followed]);
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
