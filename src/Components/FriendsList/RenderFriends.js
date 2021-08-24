import { FriendsListItem } from "./FriendsListItem/FriendListItem";

export const RenderFriends = (friends, size, getInfo, className) => {
  return friends.map((friend) => {
    return (
      <FriendsListItem
        className={className}
        friend={getInfo(friend.id)}
        size={size}
        key={friend.id}
      />
    );
  });
};
