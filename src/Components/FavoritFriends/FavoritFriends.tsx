import React from "react";
import { List, SubsectionHeader } from "../Shared";
import { FavoritFriendCard } from "./FavoritFriendCard/FavoritFriendCard";
import classNames from "classnames";
import { useLoading, useFavoritFriends } from "../../Hooks";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

const FavoritFriends = ({ className }) => {
	const { friends } = useFavoritFriends();
	const { LoadingWrapper } = useLoading("loadingFavoriteFriends");

	return (
		<LoadingWrapper>
			<aside
				className={classNames(
					FavoritFriendsStyle.lastCommunications,
					className
				)}
			>
				<SubsectionHeader>Избранные друзья</SubsectionHeader>
				<List
					className={FavoritFriendsStyle.list}
					items={friends}
					Card={FavoritFriendCard}
				/>
			</aside>
		</LoadingWrapper>
	);
};

export { FavoritFriends };
