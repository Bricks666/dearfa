import React from "react";
import { Picture } from "../Picture/Picture";
import { Posts } from "../Posts/Posts";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { UserInfo } from "../UserInfo/UserInfo";

import ProfileStyle from "./Profile.module.css";

function Profile(props) {
    return (
        <main className={`${props.className ?? ""} ${ProfileStyle.profile}`}>
            <SectionHeader className="visibility-hidden">Профиль</SectionHeader>
            <Picture
                className={`${ProfileStyle.image} fake-photo`}
                oneXSrc={props.data.profile.backgroundPhoto.url}
                alt={props.data.profile.backgroundPhoto.alt}
            />
            <UserInfo
                className={ProfileStyle.userInfo}
                user={props.data.info}
            />
            <Posts
                className={ProfileStyle.posts}
                posts={props.data.posts}
                addPost={props.data.addPost}
                toggleLike={props.data.toggleLike}
                id={props.data.info.id}
            />
        </main>
    );
}

export { Profile };
