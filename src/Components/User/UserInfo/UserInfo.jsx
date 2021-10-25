import React from "react";

import { ProfileInfo } from "../../Shared/ProfileInfo/ProfileInfo";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";
import { Status } from "../../Shared/UserCardParts/Status/Status";
import { Contacts } from "../../Shared/UserCardParts/Contacts/Contacts";

import UserInfoStyle from "./UserInfo.module.css";

export const UserInfo = (props) => {
	return (
		<ProfileInfo user={props.user} className={props.className}>
			<Status className={UserInfoStyle.status} status={props.user.status} />
			<Photo
				className={UserInfoStyle.photo}
				image={props.user.photos}
				fullName={props.user.fullName}
				id={props.user.id}
			/>
			<Contacts
				className={UserInfoStyle.contacts}
				contacts={props.user.contacts}
			/>
		</ProfileInfo>
	);
};
