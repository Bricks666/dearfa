import React from "react";
import Picture from "../../Picture/Picture";

import FriendsListItemStyle from "./FriendListItem.module.css";

function FriendsListItem(props) {
  return (
    <li className={`${FriendsListItemStyle.item} ${props.className}`}>
      <a className={``}>
        <h4 className={`${props.hiddenName ? "visibility-hidden" : ""}`}>
          {props.children}
        </h4>
        <Picture
          className={`${FriendsListItemStyle.photo} fake-photo`}
          oneXSrc="/Images/PhotoCap/PhotoCap"
          alt="Аватарка"
        />
      </a>
    </li>
  );
}

export default FriendsListItem;
