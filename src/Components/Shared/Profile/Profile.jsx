import React from "react";

import { Picture } from "../Picture/Picture";
import { Posts } from "./Posts/Posts";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import ProfileStyle from "./Profile.module.css";

const Profile = ({ className, user, ProfileInfo }) => {
	return (
		<main className={`${className ?? ""} ${ProfileStyle.profile}`}>
			<SectionHeader className="visibility-hidden">Профиль</SectionHeader>
			<Picture
				className={`${ProfileStyle.image} fake-photo`}
				oneXSrc={user.background ?? "/Images/ProfileBackground/SunSet"}
				alt={""}
			/>
			<ProfileInfo user={user} className={ProfileStyle.userInfo} />
			<Posts className={ProfileStyle.posts} />
		</main>
	);
};

export { Profile };
