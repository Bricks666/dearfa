import React from "react";
import { SubsectionHeader } from "../Shared/SubsectionHeader/SubsectionHeader";

import FavoritFriendsStyle from "./FavoritFriends.module.css";
import { FavoritFriendsList } from "./FavoritFriendsList/FavoritFriendsList";

function FavoritFriends(props) {
  const friends = props.friends.slice(0, 6);
  if (friends.length !== 0) {
    return (
      <aside
        className={`${FavoritFriendsStyle.lastCommunications} ${
          props.className ?? ""
        }`}
      >
        <SubsectionHeader className>Избранные друзья</SubsectionHeader>
        <FavoritFriendsList friends={props.friends} />
      </aside>
    );
  }
  return <></>;
}

export { FavoritFriends };
