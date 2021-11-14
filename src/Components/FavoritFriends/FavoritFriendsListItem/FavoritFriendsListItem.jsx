import React from "react";

import { Photo } from "../../Shared";

import FavoritFriendsListItemStyle from "./FavoritFriendsListItem.module.css";

export const FavoritFriendsListItem = (props) => {
	return (
		<li className={props.className}>
			<Photo
				className={FavoritFriendsListItemStyle.photo}
				photo={props.user.photos.large}
				id={props.user.id}
				fullName={props.user.name}
			/>
		</li>
	);
};
