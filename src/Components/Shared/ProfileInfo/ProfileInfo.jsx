import React from "react";

import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import ProfileInfoStyle from "./ProfileInfo.module.css";

const ProfileInfo = ({ className, user, children }) => {
	return (
		<div className={`${ProfileInfoStyle.userInfo} ${className ?? ""}`}>
			<SubsectionHeader className={`${ProfileInfoStyle.fullName}`}>
				{user.fullName}
			</SubsectionHeader>
			{children}
		</div>
	);
};

export { ProfileInfo };
