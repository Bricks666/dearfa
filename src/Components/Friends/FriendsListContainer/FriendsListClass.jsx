import { Component } from "react";
import { UsersList } from "../../Shared/UsersList/UsersList";
import { getFriends } from "../../../DAL/api";

export class FriendsListClass extends Component {
  async componentDidMount() {
    if (this.props.friends.length !== 0) {
      return;
    }

    const data = await getFriends(
      this.props.friendsCount,
      this.props.currentPage
    );

    this.props.setFriends(data);
  }

  render() {
    return (
      <UsersList
        className={this.props.className}
        render={this.props.render}
        users={this.props.friends}
      />
    );
  }
}
