import { Component } from "react";
import { UsersListItem } from "../../../Shared/UsersListItem/UsersListItem";
import { unfollow } from "../../../../DAL/api";

export class FriendsListItemClass extends Component {
  async unfollow() {
    const userId = this.props.user.id;
    this.props.startFollowing(userId);

    const data = await unfollow(userId);

    if (data.resultCode === 0) {
      this.props.unfollow(userId);
    }

    this.props.endFollowing(userId);
  }

  render() {
    return (
      <UsersListItem
        className={this.props.className}
        onClick={this.unfollow.bind(this)}
        user={this.props.user}
        isDisabled={this.props.user.isFollowing}
      />
    );
  }
}
