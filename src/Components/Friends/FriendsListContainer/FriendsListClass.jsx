import { Component } from "react";
import { UsersList } from "../../Shared/UsersList/UsersList";
import { getFriends } from "../../../DAL/api";

export class FriendsListClass extends Component {
  async componentDidMount() {

    if (this.props.isLoaded) {
      return;
    }
    this.props.startLoadingFriends();

    const data = await getFriends(
      this.props.friendsCount,
      this.props.currentPage
    );

    this.props.setFriends(data);
    this.props.endLoadingFriends();
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
