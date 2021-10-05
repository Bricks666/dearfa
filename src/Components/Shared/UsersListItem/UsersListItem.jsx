import React from "react";

import { Button } from "../Buttons/Button/Button";
import { ButtonLink } from "../Buttons/ButtonLink/ButtonLink";
import { Contacts } from "../UserCardParts/Contacts/Contacts";
import { FullName } from "../UserCardParts/FullName/FullName";
import { Photo } from "../UserCardParts/Photo/Photo";
import { Status } from "../UserCardParts/Status/Status";

import UsersListItemStyle from "./UsersListItem.module.css";

export const UsersListItem = (props) => {
	console.log(props.isDisabled);
	return (
		<li
			className={`${UsersListItemStyle.itemWrapper} ${props.className ?? ""}`}
		>
			<FullName id={props.user.id} fullName={props.user.name} />
			<Status
				className={UsersListItemStyle.status}
				status={props.user.aboutMe}
			/>
			<Photo
				className={UsersListItemStyle.photo}
				id={props.user.id}
				fullName={props.user.name}
				image={props.user.photos}
			/>

			<Contacts
				className={UsersListItemStyle.contacts}
				contacts={props.user.contacts}
			/>
			<ButtonLink
				className={UsersListItemStyle.link}
				to={`/dialogs/${props.user.id}`}
			>
				Написать
			</ButtonLink>
			<Button
				className={UsersListItemStyle.button}
				onClick={props.onClick}
				disabled={props.isDisabled}
			>
				{props.user.followed ? "Удалить из друзей" : "Добавить в друзья"}
			</Button>
		</li>
	);
};
