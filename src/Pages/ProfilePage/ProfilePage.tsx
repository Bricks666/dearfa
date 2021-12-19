import React, { FC } from "react";
import classNames from "classnames";
import { Picture, SectionHeader } from "../../Components/Shared";
import {
	useIsAuthUser,
	useLoading,
	useParamChangeListener,
	useProfile,
} from "../../Hooks";
import { ProfileInfo } from "../../Components/ProfileInfo/ProfileInfo";
import { Posts } from "../../Components/Posts/Posts";
import { IOnlyClassComponent } from "../../Types/Common";
import { MeInfo } from "../../Components/MeInfo";
import { UserInfo } from "../../Components/UserInfo";

import ProfilePageStyle from "./ProfilePage.module.css";

export const ProfilePage: FC<IOnlyClassComponent> = ({ className }) => {
	const { LoadingWrapper } = useLoading("loadingProfile");
	const { user, loadUser } = useProfile();
	useParamChangeListener("id", loadUser);
	const isAuthUser = useIsAuthUser(user.userId);

	console.log(isAuthUser);
	return (
		<main className={classNames(ProfilePageStyle.profile, className)}>
			<LoadingWrapper>
				<SectionHeader className="visibility-hidden">Профиль</SectionHeader>
				<Picture
					className={classNames(ProfilePageStyle.image, "fake-photo")}
					oneXSrc="/../src/Assets/Images/ProfileBackground/SunSet"
					alt=""
				/>
				<ProfileInfo
					className={ProfilePageStyle.userInfo}
					user={user}
					AdditionalInfo={isAuthUser ? MeInfo : UserInfo}
				/>
				<Posts className={ProfilePageStyle.posts} />
			</LoadingWrapper>
		</main>
	);
};
