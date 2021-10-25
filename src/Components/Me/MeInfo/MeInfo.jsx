import React, { useState } from "react";
import { Button } from "../../Shared/Buttons/Button/Button";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";
import { ProfileInfo } from "../../Shared/ProfileInfo/ProfileInfo";
import { Contacts } from "../../Shared/UserCardParts/Contacts/Contacts";
import { ChangeProfileConnect } from "./ChangeProfile/ChangeProfileConnect";
import { MeStatusConnect } from "./MeStatus/MeStatusConnect";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

import MeInfoStyle from "./MeInfo.module.css";

export const MeInfo = (props) => {
	const [showChangeProfile, toggleChangeProfile] = useState(false);

	return (
		<ProfileInfo user={props.user} className={props.className}>
			<MeStatusConnect
				className={MeInfoStyle.status}
				status={props.user.status}
			/>
			<Photo
				className={MeInfoStyle.photo}
				image={props.user.photos}
				id={props.user.id}
				fullName={props.user.fullName}
			/>
			<Contacts
				className={MeInfoStyle.contacts}
				contacts={props.user.contacts}
			/>
			<Button
				className={MeInfoStyle.changeProfile}
				onClick={() => toggleChangeProfile(!showChangeProfile)}
			>
				Изменить профиль
			</Button>
			<ModalWindow
				condition={showChangeProfile}
				close={() => toggleChangeProfile(!showChangeProfile)}
			>
				<ChangeProfileConnect />
			</ModalWindow>
		</ProfileInfo>
	);
};
