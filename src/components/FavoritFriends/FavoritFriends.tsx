import React, { FC } from "react";
import { List, SubsectionHeader } from "../Shared";
import { FavoritFriendCard } from "./FavoritFriendCard/FavoritFriendCard";
import classNames from "classnames";
import { useFavoritFriends } from "@/hooks";
import { StandardProps } from "@/interfaces/components";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

const FavoritFriends: FC<StandardProps> = ({ className }) => {
	const friends = useFavoritFriends();

	/**TODO: Добавить загрузку */
	return (
		<aside
			className={classNames(FavoritFriendsStyle.lastCommunications, className)}
		>
			<SubsectionHeader>Избранные друзья</SubsectionHeader>
			<List
				className={FavoritFriendsStyle.list}
				items={friends}
				Card={FavoritFriendCard}
			/>
		</aside>
	);
};

export { FavoritFriends };
