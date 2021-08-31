import React from "react";
import { AboutUser } from "../../Shared/UserCardParts/AboutUser/AboutUser";
import { SubsectionHeader } from "../../Shared/SubsectionHeader/SubsectionHeader";

import UserInfoStyle from "./UserInfo.module.css";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

function UserInfo(props) {
  return (
    <div className={`${props.className ?? ""} ${UserInfoStyle.userInfo}`}>
      <SubsectionHeader className={`${UserInfoStyle.fullName}`}>
        {props.user.fullName}
      </SubsectionHeader>
      <Photo
        className={UserInfoStyle.photo}
        image={props.user.avatar}
        id={props.user.id}
        fullName={props.user.fullName}
      />
      <AboutUser
        className={UserInfoStyle.aboutUser}
        aboutUser={props.user.about}
      />
    </div>
  );
}

export { UserInfo };
