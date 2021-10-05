import React from "react";

import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

import FavoritFriendsListItemStyle from "./FavoritFriendsListItem.module.css";

export const FavoritFriendsListItem = (props) => {
	return (
		<li className={props.className}>
			<Photo
				className={FavoritFriendsListItemStyle.photo}
				image={props.user.photos}
				id={props.user.id}
				fullName={props.user.name}
			/>
		</li>
	);
};
