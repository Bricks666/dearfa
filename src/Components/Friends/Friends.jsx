import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { FriendsListContainer } from "./FriendsLisContainer/FriendsListContainer";

import FriendsStyle from "./Friends.module.css";

export function Friends(props) {
  return (
    <main className={props.className}>
      <SectionHeader>Друзья</SectionHeader>
      <FriendsListContainer className={FriendsStyle.list} size="medium" />
    </main>
  );
}
