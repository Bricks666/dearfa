import { StandardProps } from "@/interfaces/components";
import React, { FC } from "react";
import { useFriends } from "@/hooks";
import { List, UserCard } from "../Shared";
import { useParams } from "react-router-dom";

export const FriendsList: FC<StandardProps> = ({ className }) => {
	const { page } = useParams();
	const friends = useFriends(+page!);
	/**TODO: Добавить загрузку */
	return <List className={className} items={friends} Card={UserCard} />;
};
