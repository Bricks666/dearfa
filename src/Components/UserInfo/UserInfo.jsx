import React from "react";
import AboutUser from "../AboutUser/AboutUser";
import Picture from "../Picture/Picture";
import SubsectionHeader from "../SubsectionHeader/SubsectionHeader";

import UserInfoStyle from "./UserInfo.module.css";

function UserInfo(props) {
  return (
    <div className={`${props.className ?? ""} ${UserInfoStyle.userInfo}`}>
      <SubsectionHeader className={`${UserInfoStyle.fullName}`}>
        Цыганков Кирилл
      </SubsectionHeader>
      <Picture
        className={`${UserInfoStyle.photo} fake-photo`}
        oneXSrc="/Images/Ava/Cosmic-animals"
        twoXSrc=""
        alt="Ваша аватарка"
      />
      <AboutUser className={UserInfoStyle.aboutUser} />
    </div>
  );
}

export default UserInfo;
