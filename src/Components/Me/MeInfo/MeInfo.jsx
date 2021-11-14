import React, { useCallback, useState } from "react";
import { ChangeProfileConnect } from "./ChangeProfile/ChangeProfileConnect";
import { MeStatusConnect } from "./MeStatus/MeStatusConnect";
import {
	Photo,
	Contacts,
	ProfileInfo,
	ModalWindow,
	Button,
} from "../../Shared";

import MeInfoStyle from "./MeInfo.module.css";

export const MeInfo = ({ user, className, updateProfile }) => {
	const [showChangeProfile, toggleChangeProfile] = useState(false);

	const updateProfileCB = useCallback(
		({ userId, name: fullName, status, photo, ...contacts }) => {
			updateProfile({ userId, fullName, status, photo, contacts });

			toggleChangeProfile(false);
		},
		[]
	);

	const toggleShowChangeProfile = useCallback(() => {
		toggleChangeProfile(!showChangeProfile);
	}, [showChangeProfile]);

	return (
		<ProfileInfo user={user} className={className}>
			<MeStatusConnect className={MeInfoStyle.status} status={user.status} />
			<Photo
				className={MeInfoStyle.photo}
				photo={user.photos.large}
				id={user.userId}
				fullName={user.fullName}
			/>
			<Contacts className={MeInfoStyle.contacts} contacts={user.contacts} />
			<Button
				className={MeInfoStyle.changeProfileButton}
				onClick={toggleShowChangeProfile}
			>
				Изменить профиль
			</Button>
			<ModalWindow
				condition={showChangeProfile}
				close={toggleShowChangeProfile}
			>
				<ChangeProfileConnect onSubmit={updateProfileCB} />
			</ModalWindow>
		</ProfileInfo>
	);
};
