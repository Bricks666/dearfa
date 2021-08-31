import { FriendListItemContainer } from "./FriendsListItem/FriendListItemContainer";

export const RenderFriends = (friends, className) => {
  return friends.map((friend) => {
    return (
      <FriendListItemContainer
        className={className}
        friend={friend.info}
        key={friend.info.id}
      />
    );
  });
};
