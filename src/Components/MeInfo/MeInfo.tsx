import React, { FC, useCallback, useState } from "react";
import { ChangeProfileForm } from "./ChangeProfile/ChangeProfile";
import { ChangingStatus } from "./ChangingStatus/ChangingStatus";
import { ModalWindow, Button } from "../Shared";
import { useUpdateProfile } from "../../Hooks";
import { UserDescription } from "../UserDescription/UserDescription";

import MeInfoStyle from "./MeInfo.module.css";
import { IProfileState } from "../../Types/Redux";

interface IMeInfo {
	user: IProfileState;
}

export const MeInfo: FC<IMeInfo> = ({ user }) => {
	const [showChangeProfile, toggleChangeProfile] = useState<boolean>(false);
	const { updateProfile } = useUpdateProfile();
	/* TODO: Пересмотреть наличие данного хука, может вынести логику */
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
				<ChangeProfileForm {...user} onSubmit={updateProfileCB} />
			</ModalWindow>
		</>
	);
};
