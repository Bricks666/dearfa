import { renderUsersList } from "./RenderUsersList";

import UsersListStyle from "./UsersList.module.css";

export const UsersList = (props) => {
  return (
    <ul className={`${props.className} ${UsersListStyle.list}`}>
      {renderUsersList(props.users)}
    </ul>
  );
};
