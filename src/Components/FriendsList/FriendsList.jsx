import React from "react";
import FriendsListItem from "./FriendsListItem/FriendListItem";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
  return (
    <ul className={`${FriendsListStyle.list} ${props.className}`}>
      <FriendsListItem className={FriendsListStyle.item} hiddenName>
        Кирилл
      </FriendsListItem>
      <FriendsListItem className={FriendsListStyle.item} hiddenName>
        Кирилл
      </FriendsListItem>
      <FriendsListItem className={FriendsListStyle.item} hiddenName>
        Кирилл
      </FriendsListItem>
      <FriendsListItem className={FriendsListStyle.item} hiddenName>
        Кирилл
      </FriendsListItem>
    </ul>
  );
}

export default FriendsList;
