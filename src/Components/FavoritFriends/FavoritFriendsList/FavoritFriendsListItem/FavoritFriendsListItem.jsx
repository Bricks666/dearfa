import { Photo } from "../../../Shared/UserCardParts/Photo/Photo";

import FavoritFriendsListItemStyle from "./FavoritFriendsListItem.module.css";

export const FavoritFriendsListItem = (props) => {
  return (
    <li className={props.className}>
      <Photo
        className={FavoritFriendsListItemStyle.photo}
        image={props.friend.avatar}
        id={props.friend.id}
        fullName={props.friend.fullName}
      />
    </li>
  );
};
