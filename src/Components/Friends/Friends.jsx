import React from "react";

import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { FriendsListContainer } from "./FriendsListContainer/FriendsListContainer";
import { PageListConnect } from "./PagesList/PageListConnect";
import { FriendListItemContainer } from "./FriendsListContainer/FriendsListItemContainer/FriendsListItemContainer";

import FriendsStyle from "./Friends.module.css";

export function Friends(props) {
	return (
		<main className={props.className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsListContainer
				className={FriendsStyle.list}
				currentPage={props.currentPage}
				friendsCount={props.friendsCount}
				render={(props) => <FriendListItemContainer {...props} />}
			/>
			<PageListConnect
				friendsCount={props.friendsCount}
				currentPage={props.currentPage}
			/>
		</main>
	);
}
