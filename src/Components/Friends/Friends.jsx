import React from "react";

import { SectionHeader } from "../Shared";
import { FriendsListConnect } from "./FriendsListConnect/FriendsListConnect";
import { PageListConnect } from "./PagesList/PageListConnect";
import { FriendListItemConnect } from "./FriendsListConnect/FriendsListItemConnect/FriendsListItemConnect";

import FriendsStyle from "./Friends.module.css";

export function Friends(props) {
	return (
		<main className={props.className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsListConnect
				className={FriendsStyle.list}
				friendsCount={props.friendsCount}
				Card={FriendListItemConnect}
			/>
			<PageListConnect friendsCount={props.friendsCount} />
		</main>
	);
}
