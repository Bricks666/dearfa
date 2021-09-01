import { UsersListItem } from "./UsersListItem/UsersListItem";

export const renderUsersList = (users) => {
  return users.map((user) => {
    return <UsersListItem user={user.info} />;
  });
};
