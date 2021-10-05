import React from "react";

import { Picture } from "../Shared/Picture/Picture";
import { Posts } from "./Posts/Posts";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { UserInfo } from "./UserInfo/UserInfo";

import ProfileStyle from "./Profile.module.css";

function Profile(props) {
	return (
		<main className={`${props.className ?? ""} ${ProfileStyle.profile}`}>
			<SectionHeader className="visibility-hidden">Профиль</SectionHeader>
			<Picture
				className={`${ProfileStyle.image} fake-photo`}
				oneXSrc={props.user.background ?? "/Images/ProfileBackground/SunSet"}
				alt={""}
			/>
			<UserInfo className={ProfileStyle.userInfo} user={props.user} />
			<Posts className={ProfileStyle.posts} />
		</main>
	);
}

export { Profile };
