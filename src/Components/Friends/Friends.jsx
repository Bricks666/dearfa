import { FriendsList } from "../Shared/FriendsList/FriendsList";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

import FriendsStyle from "./Friends.module.css";

export function Friends(props) {
  return (
    <main className={props.className}>
      <SectionHeader>Друзья</SectionHeader>
      <FriendsList
        className={FriendsStyle.list}
        size="medium"
        friends={props.friends}
      />
    </main>
  );
}
