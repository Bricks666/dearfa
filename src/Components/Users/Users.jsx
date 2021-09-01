import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { UsersList } from "./UsersList/UsersList";

export const Users = (props) => {
  return (
    <main className={props.className}>
      <SectionHeader>Все пользователи</SectionHeader>
      <UsersList users={props.users} />
    </main>
  );
};
