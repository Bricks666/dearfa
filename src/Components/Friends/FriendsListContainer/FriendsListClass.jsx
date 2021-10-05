import { Component } from "react";
import { UsersList } from "../../Shared/UsersList/UsersList";

export class FriendsListClass extends Component {
  componentDidMount() {
    this.props.loadFriends(
      this.props.friendsCount,
      this.props.currentPage,
      this.props.isLoaded
    );
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
