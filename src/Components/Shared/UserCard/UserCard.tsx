import classNames from "classnames";
import React, { FC } from "react";
import { DataList } from "..";
import { IUserComponent } from "../../../Types/Components";
import { Button } from "../Button/Button";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FullName } from "../UserCardParts/FullName/FullName";
import { Photo } from "../UserCardParts/Photo/Photo";
import { Status } from "../UserCardParts/Status/Status";

import UserCardStyle from "./UserCard.module.css";

export const UserCard: FC<IUserComponent> = ({
	user,
	className,
	onClick,
	isFollowing,
}) => {
	console.log("a");
	return (
		<li className={classNames(UserCardStyle.itemWrapper, className)}>
			<FullName id={user.id}>{user.name}</FullName>
			<DataList>
				<Status className={UserCardStyle.status} status={user.status} />
			</DataList>
			<Photo
				className={UserCardStyle.photo}
				id={user.id}
				fullName={user.name}
				photo={user.photos.large}
			/>
			<ButtonLink className={UserCardStyle.link} to={`/dialogs/${user.id}`}>
				Написать
			</ButtonLink>
			<Button
				className={UserCardStyle.button}
				onClick={onClick}
				disabled={isFollowing}
			>
				{user.followed ? "Удалить из друзей" : "Добавить в друзья"}
			</Button>
		</li>
	);
};
