import React, { FC } from "react";
import { IOnlyClassComponent } from "../../../Types/Common";
import { IUser } from "../../../Types/Redux";

import { Photo } from "../../Shared";

import FavoriteFriendCardStyle from "./FavoritFriendCard.module.css";

interface IFavoriteFriendsCard
	extends IOnlyClassComponent,
		Pick<IUser, "photos" | "id" | "name"> {}

export const FavoritFriendCard: FC<IFavoriteFriendsCard> = ({
	className,
	photos: { small },
	id,
	name,
}) => {
	return (
		<li className={className}>
			<Photo
				className={FavoriteFriendCardStyle.photo}
				photo={small}
				id={id}
				fullName={name}
			/>
		</li>
	);
};
