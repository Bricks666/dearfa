import { FriendsListItem } from "./FriendsListItem/FriendListItem";

export const RenderFriends = (friends, size, dispatch, className) => {
  return friends.map((friend) => {
    return (
      <FriendsListItem
        className={className}
        friend={friend.info}
        size={size}
        dispatch={dispatch}
      />
    );
  });
};
