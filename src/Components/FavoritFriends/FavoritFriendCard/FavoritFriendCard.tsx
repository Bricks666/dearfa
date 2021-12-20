import React, { FC } from "react";
import { IFavoriteFriendComponent } from "../../../Types/Components";

import { Photo } from "../../Shared";

import FavoriteFriendCardStyle from "./FavoritFriendCard.module.css";

export const FavoritFriendCard: FC<IFavoriteFriendComponent> = ({
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
