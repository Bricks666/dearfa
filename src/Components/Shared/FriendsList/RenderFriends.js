import { FriendListItemContainer } from "./FriendsListItem/FriendListItemContainer";

export const RenderFriends = (friends, size, className) => {
  return friends.map((friend) => {
    return (
      <FriendListItemContainer
        className={className}
        friend={friend.info}
        size={size}
        key={friend.info.id}
      />
    );
  });
};
