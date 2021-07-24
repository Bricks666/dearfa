import FriendsList from "../FriendsList/FriendsList";
import SubsectionHeader from "../SubsectionHeader/SubsectionHeader";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

function FavoritFriends(props) {
  return (
    <aside
      className={`${FavoritFriendsStyle.lastCommunications} ${props.className}`}
    >
      <SubsectionHeader
        className={FavoritFriendsStyle.friendsList}
        content="Избранные друзья"
      />
      <FriendsList className={""} />
    </aside>
  );
}

export default FavoritFriends;
