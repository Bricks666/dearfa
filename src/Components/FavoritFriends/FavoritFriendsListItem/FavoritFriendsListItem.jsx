import { Photo } from "../../Shared/UserCardParts/Photo/Photo";

import FavoritFriendsListItemStyle from "./FavoritFriendsListItem.module.css";

export const FavoritFriendsListItem = (props) => {
  return (
    <li className={props.className}>
      <Photo
        className={FavoritFriendsListItemStyle.photo}
        image={props.user.info.avatar}
        id={props.user.info.id}
        fullName={props.user.info.fullName}
      />
    </li>
  );
};
