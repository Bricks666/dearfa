import React from "react";
import { renderFriendsList } from "./RenderFriendsList";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
  return (
    <ul className={`${FriendsListStyle.list} ${props.className ?? ""} `}>
      {renderFriendsList(props.friends, FriendsListStyle.friend)}
    </ul>
  );
}

export { FriendsList };
