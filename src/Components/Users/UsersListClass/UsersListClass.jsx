import axios from "axios";
import { Component } from "react";
import { addLoading } from "../../Shared/AddLoading/AddLoading";
import { UsersList } from "../../Shared/UsersList/UsersList";

export class UsersListClass extends Component {
  async componentDidMount() {
    this.props.startLoadingUsers();
    const response = await axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`
    );

    this.props.addUsers(response.data);
    this.props.stopLoadingUsers();
  }

  /* Может стоит сделать компоненту полностью классовой */
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