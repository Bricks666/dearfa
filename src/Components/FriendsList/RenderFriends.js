import { FriendsListItem } from "./FriendsListItem/FriendListItem";

export const RenderFriends = (friends, size, dispatch, className) => {
  return friends.map((friendId) => {
    return (
      <FriendsListItem
        className={className}
        friend={dispatch({ type: "GET-USER-INFO", id: friendId })}
        dispatch={dispatch}
        size={size}
      />
    );
  });
};
