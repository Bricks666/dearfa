import { ProfileInfo } from "@/models/profile";
import React, { FC } from "react";
import { ButtonLink } from "../Shared";
import { UserDescription } from "../UserDescription/UserDescription";

import UserInfoStyle from "./UserInfo.module.css";

interface UserInfoProps {
	readonly user: ProfileInfo;
}

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
	return (
		<>
			<UserDescription
				contacts={user.contacts}
				aboutMe={user.aboutMe}
				status={user.status}
			/>
			<ButtonLink
				className={UserInfoStyle.button}
				to={`/dialogs/${user.userId}`}
			>
				Написать
			</ButtonLink>
		</>
	);
};
