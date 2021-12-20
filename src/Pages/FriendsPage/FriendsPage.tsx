import React, { FC } from "react";
import { PagesListWithRouting, SectionHeader } from "../../Components/Shared";
import { FriendsList } from "../../Components/FriendsList";
import { useFriendsPageCount } from "../../Hooks";
import { IOnlyClassComponent } from "../../Types/Components";

import FriendsPageStyle from "./FriendsPage.module.css";

export const FriendsPage: FC<IOnlyClassComponent> = ({ className }) => {
	const pageCount = useFriendsPageCount();

	return (
		<main className={className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsList className={FriendsPageStyle.list} />
			<PagesListWithRouting pageCount={pageCount} />
		</main>
	);
};
