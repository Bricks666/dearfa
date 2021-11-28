import classNames from "classnames";
import React from "react";

import { SubsectionHeader, Photo } from "../../Shared";

import ProfileInfoStyle from "./ProfileInfo.module.css";

const ProfileInfo = ({ className, user, AdditionalInfo }) => {
	return (
		<div className={classNames(ProfileInfoStyle.userInfo, className)}>
			<SubsectionHeader className={ProfileInfoStyle.fullName}>
				{user.fullName}
			</SubsectionHeader>
			<Photo
				className={ProfileInfoStyle.photo}
				photo={user.photos.large}
				id={user.userId}
				fullName={user.fullName}
			/>
			<AdditionalInfo user={user} />
		</div>
	);
};

export { ProfileInfo };
