import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../Picture/Picture";
import AboutUser from "../../AboutUser/AboutUser";

import FriendsListItemStyle from "./FriendListItem.module.css";

function FriendsListItem(props) {
  return (
    <li
      className={`${FriendsListItemStyle.item}
      ${props.className ?? ""} ${
        props.size === "small"
          ? FriendsListItemStyle.small
          : props.size === "medium"
          ? FriendsListItemStyle.medium
          : props.size === "large"
          ? FriendsListItemStyle.large
          : ""
      }`}
    >
      <Link to="" className={FriendsListItemStyle.link}>
        <h4 className={FriendsListItemStyle.name}>{props.children}</h4>
        <Picture
          className={`${FriendsListItemStyle.photo} fake-photo`}
          oneXSrc="/Images/PhotoCap/PhotoCap"
          alt="Аватарка"
        />
        <AboutUser className={FriendsListItemStyle.aboutUser} />
      </Link>
    </li>
  );
}

export default FriendsListItem;
