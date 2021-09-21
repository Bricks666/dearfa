import React from "react";
import { SubsectionHeader } from "../Shared/SubsectionHeader/SubsectionHeader";
import { UsersList } from "../Shared/UsersList/UsersList";
import { FavoritFriendsListItem } from "./FavoritFriendsListItem/FavoritFriendsListItem";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

function FavoritFriends(props) {
  if (props.friends.length !== 0) {
    return (
      <aside
        className={`${FavoritFriendsStyle.lastCommunications} ${
          props.className ?? ""
        }`}
      >
        <SubsectionHeader>Избранные друзья</SubsectionHeader>
        <UsersList
          className={FavoritFriendsStyle.list}
          users={props.friends}
          render={(props) => <FavoritFriendsListItem {...props} />}
        />
      </aside>
    );
  }
  return <></>;
}

export { FavoritFriends };
