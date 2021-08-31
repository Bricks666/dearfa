import { renderFavoritFriendsList } from "./RenderFavoritFriendsList";

import FavoritFriendsListStyle from "./FavoritFriendsList.module.css";

export const FavoritFriendsList = (props) => {
  return (
    <ul className={FavoritFriendsListStyle.list}>
      {renderFavoritFriendsList(props.friends, FavoritFriendsListStyle.photo)}
    </ul>
  );
};
