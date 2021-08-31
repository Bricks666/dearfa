import { FavoritFriendsListItem } from "./FavoritFriendsListItem/FavoritFriendsListItem";

export const renderFavoritFriendsList = (friends, className) => {
  return friends.slice(0, 6).map((friend) => {
    return (
      <FavoritFriendsListItem
        className={className}
        friend={friend.info}
        key={friend.info.id}
      />
    );
  });
};
