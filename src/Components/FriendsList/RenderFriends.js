import { FriendsListItem } from "./FriendsListItem/FriendListItem";

export const RenderFriends = (friends, size, dispatch, className) => {
  return friends.map((friend) => {
    return (
      <FriendsListItem
        className={className}
        friend={dispatch({ type: "GET-USER-INFO", id: friend.id })}
        size={size}
        key={friend.id}
      />
    );
  });
};
