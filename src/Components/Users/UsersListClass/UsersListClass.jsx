import { Component } from "react";
import { addLoading } from "../../Shared/AddLoading/AddLoading";
import { UsersList } from "../../Shared/UsersList/UsersList";
import { getUsers } from "../../../DAL/api";

export class UsersListClass extends Component {
  async componentDidMount() {
    if (this.props.users.length !== 0) {
      return;
    }

    this.props.startLoadingUsers();

    const users = await getUsers(this.props.usersCount, this.props.currentPage);

    this.props.addUsers(users);

    this.props.endLoadingUsers();
  }

  render() {
    const WithLoading = addLoading(UsersList);

    return (
      <WithLoading
        className={this.props.className}
        render={this.props.render}
        users={this.props.users}
        isLoading={this.props.isLoading}
      />
    );
  }
}
