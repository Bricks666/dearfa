import { UsersButton } from "./UsersButton/UsersButton";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { UsersListContainer } from "./UsersListContainer/UsersListContainer";
import { UsersListItemContainer } from "./UsersListItemContainer/UsersListItemContainer";

import UsersStyle from "./Users.module.css";

export const Users = (props) => {
  return (
    <main className={`${props.className ?? ""} ${UsersStyle.users}`}>
      <SectionHeader>Все пользователи</SectionHeader>
      <UsersListContainer
        className={UsersStyle.list}
        render={(props) => <UsersListItemContainer {...props} />}
      />
      <UsersButton className={UsersStyle.button}>Ещё</UsersButton>
    </main>
  );
};
