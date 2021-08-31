import React from "react";
import { AboutUser } from "../../../Shared/UserCardParts/AboutUser/AboutUser";
import { Button } from "../../../Shared/Buttons/Button/Button";
import { FullName } from "../../../Shared/UserCardParts/FullName/FullName";
import { Photo } from "../../../Shared/UserCardParts/Photo/Photo";

import FriendsListItemStyle from "./FriendListItem.module.css";

function FriendsListItem(props) {
  const removeFriend = () => {
    props.removeFriend(props.friend.id);
  };

  return (
    <li
      className={`${FriendsListItemStyle.item}
             ${props.className ?? ""}`}
    >
      <FullName id={props.friend.id} fullName={props.friend.fullName} />
      <Photo
        className={FriendsListItemStyle.photo}
        id={props.friend.id}
        fullName={props.friend.fullName}
        image={props.friend.avatar}
      />

      <AboutUser
        className={FriendsListItemStyle.aboutUser}
        aboutUser={props.friend.about}
      />
      <Button className={FriendsListItemStyle.unfollow} onClick={removeFriend}>
        Удалить из друзей
      </Button>
    </li>
  );
}

export { FriendsListItem };
