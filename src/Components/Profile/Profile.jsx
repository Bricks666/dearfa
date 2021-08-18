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
                oneXSrc={props.data.info.backgroundPhoto.url}
                alt={props.data.info.backgroundPhoto.alt}
            />
            <UserInfo
                className={ProfileStyle.userInfo}
                user={props.data.info}
            />
            <Posts className={ProfileStyle.posts} posts={props.data.posts} />
        </main>
    );
}

export { Profile };
