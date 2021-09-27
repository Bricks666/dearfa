import { Component } from "react";
import { UsersListItem } from "../../Shared/UsersListItem/UsersListItem";
import { follow } from "../../../DAL/api";
import { unfollow } from "../../../DAL/api";

export class UsersListItemClass extends Component {
  async follow() {

    const userId = this.props.user.id;
    this.props.startFollowing(userId);
    const data = await follow(userId);
    console.log(data);
    if (data.resultCode === 0) {
      this.props.follow(this.props.user);
    }

    this.props.endFollowing(userId);
  }

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
        user={this.props.user}
        onClick={
          this.props.user.followed
            ? this.unfollow.bind(this)
            : this.follow.bind(this)
        }
        isDisabled={this.props.user.isFollowing}
      />
    );
  }
}
