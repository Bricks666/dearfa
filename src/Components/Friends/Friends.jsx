import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { FriendsListContainer } from "./FriendsListContainer/FriendsListContainer";

import FriendsStyle from "./Friends.module.css";
import { FriendListItemContainer } from "./FriendsListContainer/FriendsListItemContainer/FriendsListItemContainer";

export function Friends(props) {
  return (
    <main className={props.className}>
      <SectionHeader>Друзья</SectionHeader>
      <FriendsListContainer
        className={FriendsStyle.list}
        currentPage={props.currentPage}
        friendsCount={props.friendsCount}
        render={(props) => <FriendListItemContainer {...props} />}
      />
    </main>
  );
}
