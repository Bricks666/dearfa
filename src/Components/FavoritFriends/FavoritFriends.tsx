import React, { FC } from "react";
import { List, SubsectionHeader } from "../Shared";
import { FavoritFriendCard } from "./FavoritFriendCard/FavoritFriendCard";
import classNames from "classnames";
import { useLoading, useFavoritFriends } from "../../Hooks";

import FavoritFriendsStyle from "./FavoritFriends.module.css";
import { IOnlyClassComponent } from "../../Types/Common";

const FavoritFriends: FC<IOnlyClassComponent> = ({ className }) => {
	const { friends } = useFavoritFriends();
	const { LoadingWrapper } = useLoading("loadingFavoriteFriends");

	return (
		<aside
			className={classNames(FavoritFriendsStyle.lastCommunications, className)}
		>
			<LoadingWrapper>
				<SubsectionHeader>Избранные друзья</SubsectionHeader>
				<List
					className={FavoritFriendsStyle.list}
					items={friends}
					Card={FavoritFriendCard}
				/>
			</LoadingWrapper>
		</aside>
	);
};

export { FavoritFriends };
