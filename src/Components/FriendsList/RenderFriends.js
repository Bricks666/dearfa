import { FriendListItemContainer } from "./FriendsListItem/FriendListItemContainer";

export const RenderFriends = (friends, size, dispatch, className) => {
  return friends.map((friend) => {
    return (
      <FriendListItemContainer
        className={className}
        friend={friend.info}
        size={size}
        dispatch={dispatch}
      />
    );
  });
};
