import { Component } from "react";
import { UsersListItem } from "../../../Shared/UsersListItem/UsersListItem";
import { unfollow } from "../../../../DAL/api";

export class FriendsListItemClass extends Component {
  async unfollow() {

    const data = await unfollow(this.props.user.id);

    if (data.resultCode === 0) {
      this.props.unfollow(this.props.user.id);
    }
  }

  render() {
    return (
      <UsersListItem
        className={this.props.className}
        onClick={this.unfollow.bind(this)}
        user={this.props.user}
      />
    );
  }
}
