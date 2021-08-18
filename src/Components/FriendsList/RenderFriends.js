import { FriendsListItem } from "./FriendsListItem/FriendListItem";

export const RenderFriends = (friends, size, className) => {
  return friends.map((friend) => {
    return (
      <FriendsListItem
        className={className}
        friend={friend.getInfo()}
        size={size}
        key={friend.id}
      />
    );
  });
};
