import React, { FC } from "react";

import { SectionHeader } from "../Shared";
import { FriendsList } from "./FriendsList/FriendsList";
import { FriendsPagesList } from "./FriendsPagesList/FriendsPagesList";
import { IOnlyClassComponent } from "../../Types/Common";

import FriendsStyle from "./Friends.module.css";

export const Friends: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsList className={FriendsStyle.list} />
			<FriendsPagesList />
		</main>
	);
};
