import React, { FC } from "react";
import { Photo } from "@/components/Shared";
import { StandardProps } from "@/interfaces/components";
import { User } from "@/models/users";

import FavoriteFriendCardStyle from "./FavoritFriendCard.module.css";

interface FavoriteFriendCardProps
	extends StandardProps,
		Pick<User, "photos" | "id" | "name"> {}

export const FavoritFriendCard: FC<FavoriteFriendCardProps> = ({
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
