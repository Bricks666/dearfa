import React from "react";

import { Contacts } from "../../Shared/UserCardParts/Contacts/Contacts";
import { SubsectionHeader } from "../../Shared/SubsectionHeader/SubsectionHeader";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

import ProfileInfoStyle from "./ProfileInfo.module.css";

function ProfileInfo(props) {
	return (
		<div className={`${props.className ?? ""} ${ProfileInfoStyle.userInfo}`}>
			<SubsectionHeader className={`${ProfileInfoStyle.fullName}`}>
				{props.user.fullName}
			</SubsectionHeader>
			<props.Status status={props.user.status} />
			<Photo
				className={ProfileInfoStyle.photo}
				image={props.user.photos}
				id={props.user.userId}
				fullName={props.user.fullName}
			/>
			<Contacts
				className={ProfileInfoStyle.contacts}
				contacts={props.user.contacts}
			/>
		</div>
	);
}

export { ProfileInfo };
