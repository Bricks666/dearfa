import React from "react";
import { AboutUser } from "../AboutUser/AboutUser";
import { Picture } from "../Picture/Picture";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import UserInfoStyle from "./UserInfo.module.css";

function UserInfo(props) {
    return (
        <div className={`${props.className ?? ""} ${UserInfoStyle.userInfo}`}>
            <SubsectionHeader className={`${UserInfoStyle.fullName}`}>
                {props.user.fullName}
            </SubsectionHeader>

            <Picture
                className={`${UserInfoStyle.photo} fake-photo`}
                oneXSrc={props.user.avatar.url}
                twoXSrc=""
                alt={props.user.avatar.alt}
            />
            <AboutUser
                className={UserInfoStyle.aboutUser}
                aboutUser={props.user.about}
            />
        </div>
    );
}

export { UserInfo };
