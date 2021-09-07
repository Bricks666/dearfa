import React from "react";
import { AboutUser } from "../../Shared/UserCardParts/AboutUser/AboutUser";
import { SubsectionHeader } from "../../Shared/SubsectionHeader/SubsectionHeader";

import UserInfoStyle from "./UserInfo.module.css";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

function UserInfo(props) {
  return (
    <div className={`${props.className ?? ""} ${UserInfoStyle.userInfo}`}>
      <SubsectionHeader className={`${UserInfoStyle.fullName}`}>
        {props.user.name}
      </SubsectionHeader>
      <Photo
        className={UserInfoStyle.photo}
        image={props.user.photos}
        id={props.user.id}
        fullName={props.user.name}
      />
      <AboutUser className={UserInfoStyle.aboutUser} about={props.user.about} />
    </div>
  );
}

export { UserInfo };
