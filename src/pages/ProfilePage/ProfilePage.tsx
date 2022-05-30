import React, { FC } from "react";
import classNames from "classnames";
import { Picture, SectionHeader } from "@/components/Shared";
import { useProfile } from "@/hooks";
import { ProfileInfo } from "@/components/ProfileInfo/ProfileInfo";
import { Posts } from "@/components/Posts/Posts";
import { MeInfo } from "@/components/MeInfo";
import { UserInfo } from "@/components/UserInfo";
import { StandardProps } from "@/interfaces/components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthId } from "@/models/auth";

import ProfilePageStyle from "./ProfilePage.module.css";

export const ProfilePage: FC<StandardProps> = ({ className }) => {
	const { id = 0 } = useParams();
	const user = useProfile(+id);
	const authId = useSelector(selectAuthId);

	/**TODO: Добавить загрузку */
	return (
		<main className={classNames(ProfilePageStyle.profile, className)}>
			<SectionHeader className="visibility-hidden">Профиль</SectionHeader>
			<Picture
				className={classNames(ProfilePageStyle.image, "fake-photo")}
				oneXSrc="/../src/Assets/Images/ProfileBackground/SunSet"
				alt=""
			/>
			<ProfileInfo
				className={ProfilePageStyle.userInfo}
				user={user}
				AdditionalInfo={authId == id ? MeInfo : UserInfo}
			/>
			<Posts className={ProfilePageStyle.posts} />
		</main>
	);
};
