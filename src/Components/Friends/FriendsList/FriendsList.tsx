import React from "react";

import { useLoading, useFriends, useParamChangeListener } from "../../../Hooks";
import { List } from "../../Shared";
import { FriendCard } from "./FriendCard";

export const FriendsList = ({ className }) => {
	const { LoadingWrapper } = useLoading("loadingFriends");
	const { friends, loadFriends } = useFriends();
	useParamChangeListener("page", loadFriends);

	return (
		<LoadingWrapper>
			<List className={className} items={friends} Card={FriendCard} />
		</LoadingWrapper>
	);
};
