import React from "react";
import { Contacts } from "../../Shared/UserCardParts/Contacts/Contacts";
import { SubsectionHeader } from "../../Shared/SubsectionHeader/SubsectionHeader";

import UserInfoStyle from "./UserInfo.module.css";
import { Photo } from "../../Shared/UserCardParts/Photo/Photo";
import { Status } from "../../Shared/UserCardParts/Status/Status";

function UserInfo(props) {
  return (
    <div className={`${props.className ?? ""} ${UserInfoStyle.userInfo}`}>
      <SubsectionHeader className={`${UserInfoStyle.fullName}`}>
        {props.user.fullName}
      </SubsectionHeader>
      <Status status={props.user.aboutMe} />
      <Photo
        className={UserInfoStyle.photo}
        image={props.user.photos}
        id={props.user.userId}
        fullName={props.user.fullName}
      />
      <Contacts
        className={UserInfoStyle.contacts}
        contacts={props.user.contacts}
      />
    </div>
  );
}

export { UserInfo };
