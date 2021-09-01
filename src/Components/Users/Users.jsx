import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { UsersLIstContainer } from "./UsersListContainer/UsersListContainer";
import { UsersListItemContainer } from "./UsersListItemContainer/UsersListItemContainer";

export const Users = (props) => {
  return (
    <main className={props.className}>
      <SectionHeader>Все пользователи</SectionHeader>
      <UsersLIstContainer
        render={(props) => <UsersListItemContainer {...props} />}
      />
    </main>
  );
};
