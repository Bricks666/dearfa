import React, { useCallback, useState } from "react";
import { Button } from "../../Shared/Buttons/Button/Button";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";
import { ProfileInfo } from "../../Shared/ProfileInfo/ProfileInfo";
import { Contacts } from "../../Shared/UserCardParts/Contacts/Contacts";
import { ChangeProfileConnect } from "./ChangeProfile/ChangeProfileConnect";
import { MeStatusConnect } from "./MeStatus/MeStatusConnect";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

import MeInfoStyle from "./MeInfo.module.css";

export const MeInfo = ({user, className, updateProfile}) => {
	const [showChangeProfile, toggleChangeProfile] = useState(false);

	const updateProfileCB = useCallback((newProfileData) => {
		updateProfile(newProfileData);

		toggleChangeProfile(false);
	}, []);

	return (
		<ProfileInfo user={user} className={className}>
			<MeStatusConnect
				className={MeInfoStyle.status}
				status={user.status}
			/>
			<Photo
				className={MeInfoStyle.photo}
				photo={user.photos.large}
				id={user.userId}
				fullName={user.fullName}
			/>
			<Contacts
				className={MeInfoStyle.contacts}
				contacts={user.contacts}
			/>
			<Button
				className={MeInfoStyle.changeProfileButton}
				onClick={() => toggleChangeProfile(!showChangeProfile)}
			>
				Изменить профиль
			</Button>
			<ModalWindow
				condition={showChangeProfile}
				close={() => toggleChangeProfile(!showChangeProfile)}
			>
				<ChangeProfileConnect onSubmit={updateProfileCB} />
			</ModalWindow>
		</ProfileInfo>
	);
};
