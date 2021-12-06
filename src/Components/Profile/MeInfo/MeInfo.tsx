import React, { useCallback, useState } from "react";
import { ChangeProfile } from "./ChangeProfile/ChangeProfile";
import { ChangingStatus } from "./ChangingStatus/ChangingStatus";
import { ModalWindow, Button } from "../../Shared";
import { useUpdateProfile } from "../../../Hooks";
import { UserDescription } from "../UserDescription/UserDescription";

import MeInfoStyle from "./MeInfo.module.css";

export const MeInfo = ({ user }) => {
	const [showChangeProfile, toggleChangeProfile] = useState(false);
	const { updateProfile } = useUpdateProfile();
	const updateProfileCB = useCallback(
		({ userId, name: fullName, aboutMe, photo, ...contacts }) => {
			updateProfile({ userId, fullName, aboutMe, photo, contacts });

			toggleChangeProfile(false);
		},
		[updateProfile]
	);

	const toggleShowChangeProfile = useCallback(() => {
		toggleChangeProfile(!showChangeProfile);
	}, [showChangeProfile]);

	return (
		<>
			<UserDescription
				Status={ChangingStatus}
				status={user.status}
				aboutMe={user.aboutMe}
				contacts={user.contacts}
			/>
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
				<ChangeProfile {...user} onSubmit={updateProfileCB} />
			</ModalWindow>
		</>
	);
};
