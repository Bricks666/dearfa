import { Component } from "react";
import { UsersListItem } from "../../Shared/UsersListItem/UsersListItem";

export class UsersListItemClass extends Component {
  follow() {
    this.props.follow(this.props.user);
  }

  unfollow() {
    this.props.unfollow(this.props.user.id);
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
        isDisabled={this.props.isFollowing}
      />
    );
  }
}
