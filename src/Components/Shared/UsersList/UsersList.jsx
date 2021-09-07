import axios from "axios";
import { renderUsersList } from "./RenderUsersList";

import UsersListStyle from "./UsersList.module.css";

export const UsersList = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {

        props.setUsers(response.data.items);
      });
  }
  return (
    <ul className={`${UsersListStyle.list} ${props.className ?? ""}`}>
      {renderUsersList(props.render, props.users)}
    </ul>
  );
};
