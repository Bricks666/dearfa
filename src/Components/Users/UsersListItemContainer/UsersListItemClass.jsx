import { Component } from "react";
import { UsersListItem } from "../../Shared/UsersListItem/UsersListItem";
import { follow } from "../../../DAL/api";
import { unfollow } from "../../../DAL/api";

export class UsersListItemClass extends Component {
  async follow() {
    const data = await follow(this.props.user.id);

    if (data.resultCode === 0) {
      this.props.follow(this.props.user);
    }
  }

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
        user={this.props.user}
        onClick={
          this.props.user.followed
            ? this.unfollow.bind(this)
            : this.follow.bind(this)
        }
      />
    );
  }
}
