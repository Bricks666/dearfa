import React from "react";

import { ButtonLink } from "../../Shared";
import { UserDescription } from "../UserDescription/UserDescription";

import UserInfoStyle from "./UserInfo.module.css";

export const UserInfo = ({ user }) => {
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
