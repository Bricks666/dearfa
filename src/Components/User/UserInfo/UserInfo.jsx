import React from "react";

import { ProfileInfo, Picture, Status, Contacts } from "../../Shared";

import UserInfoStyle from "./UserInfo.module.css";

export const UserInfo = (props) => {
	return (
		<ProfileInfo user={props.user} className={props.className}>
			<Status className={UserInfoStyle.status} status={props.user.status} />
			<Picture
				className={UserInfoStyle.photo}
				oneXSrc={props.user.photos.large || "/Images/ProfileBackground/SunSet"}
				alt={props.user.fullName}
			/>
			<Contacts
				className={UserInfoStyle.contacts}
				contacts={props.user.contacts}
			/>
		</ProfileInfo>
	);
};
