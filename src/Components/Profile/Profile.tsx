import React, { FC } from "react";
import classNames from "classnames";
import {
	useIsAuthUser,
	useLoading,
	useParamChangeListener,
	useUserProfile,
} from "../../Hooks";
import { SectionHeader, Picture } from "../Shared";
import { Posts } from "../Posts/Posts";
import { UserInfo } from "./UserInfo/UserInfo";
import { MeInfo } from "./MeInfo/MeInfo";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { IOnlyClassComponent } from "../../Types/Common";

import ProfileStyle from "./Profile.module.css";

export const Profile: FC<IOnlyClassComponent> = ({ className }) => {
	const LoadingWrapper = useLoading("loadingProfile");
	const { user, loadUser } = useUserProfile();
	const id = useParamChangeListener("id", loadUser);
	const isAuthUser = useIsAuthUser(id);

	return (
		<main className={classNames(ProfileStyle.profile, className)}>
			<LoadingWrapper>
				<SectionHeader className="visibility-hidden">Профиль</SectionHeader>
				<Picture
					className={classNames(ProfileStyle.image, "fake-photo")}
					oneXSrc="/Images/ProfileBackground/SunSet"
					alt=""
				/>
				<ProfileInfo
					className={ProfileStyle.userInfo}
					user={user}
					AdditionalInfo={isAuthUser ? MeInfo : UserInfo}
				/>
				<Posts className={ProfileStyle.posts} />
			</LoadingWrapper>
		</main>
	);
};
