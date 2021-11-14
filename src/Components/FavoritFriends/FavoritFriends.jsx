import React from "react";
import { UsersList, SubsectionHeader } from "../Shared";
import { FavoritFriendsListItem } from "./FavoritFriendsListItem/FavoritFriendsListItem";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

const FavoritFriends = (props) => {
	return (
		<aside
			className={`${FavoritFriendsStyle.lastCommunications} ${
				props.className ?? ""
			}`}
		>
			<SubsectionHeader>Избранные друзья</SubsectionHeader>
			<UsersList
				className={FavoritFriendsStyle.list}
				users={props.friends}
				Card={FavoritFriendsListItem}
			/>
		</aside>
	);
};

export { FavoritFriends };
