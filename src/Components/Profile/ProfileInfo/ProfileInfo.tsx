import classNames from "classnames";
import React, { ComponentType, FC } from "react";
import { IOnlyClassComponent } from "../../../Types/Common";
import { IProfileState } from "../../../Types/Redux";

import { SubsectionHeader, Photo } from "../../Shared";

import ProfileInfoStyle from "./ProfileInfo.module.css";

interface IProfileInfo extends IOnlyClassComponent {
	user: IProfileState;
	AdditionalInfo: ComponentType<{ user: IProfileState }>;
}

const ProfileInfo: FC<IProfileInfo> = ({ className, user, AdditionalInfo }) => {
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
