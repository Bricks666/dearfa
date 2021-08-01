import React from "react";
import FriendsListItem from "./FriendsListItem/FriendListItem";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
  return (
    <ul
      className={`${FriendsListStyle.list} ${
        props.size === "small"
          ? FriendsListStyle.small
          : props.size === "medium"
          ? FriendsListStyle.medium
          : props.size === "large"
          ? FriendsListStyle.large
          : ""
      } ${props.className ?? ""} `}
    >
      <FriendsListItem className={FriendsListStyle.item} size={props.size}>
        Кирилл
      </FriendsListItem>
      <FriendsListItem className={FriendsListStyle.item} size={props.size}>
        Кирилл
      </FriendsListItem>
      <FriendsListItem className={FriendsListStyle.item} size={props.size}>
        Кирилл
      </FriendsListItem>
      <FriendsListItem className={FriendsListStyle.item} size={props.size}>
        Кирилл
      </FriendsListItem>
    </ul>
  );
}

export default FriendsList;
