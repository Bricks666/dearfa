import React from "react";

import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import ProfileInfoStyle from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
	return (
		<div className={`${ProfileInfoStyle.userInfo} ${props.className ?? ""}`}>
			<SubsectionHeader className={`${ProfileInfoStyle.fullName}`}>
				{props.user.fullName}
			</SubsectionHeader>
			{props.children}
		</div>
	);
};

export { ProfileInfo };
