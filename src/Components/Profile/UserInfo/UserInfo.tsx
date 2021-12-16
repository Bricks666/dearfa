import React, { FC } from "react";
import { IProfileState } from "../../../Types/Redux";

import { ButtonLink } from "../../Shared";
import { UserDescription } from "../UserDescription/UserDescription";

import UserInfoStyle from "./UserInfo.module.css";

interface IUserInfo {
	user: IProfileState;
}

export const UserInfo: FC<IUserInfo> = ({ user }) => {
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
