import axios from "axios";
import { Component } from "react";
import { UsersListItem } from "../../Shared/UsersListItem/UsersListItem";

export class UsersListItemClass extends Component {
  async follow() {
    const response = await axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${this.props.user.id}`,
      {},
      {
        withCredentials: true,
        headers: { "API-KEY": "8991c970-a910-48aa-8f58-0b57f2e3e339" },
      }
    );
    debugger;
    if (response.data.resultCode === 0) {
      this.props.follow(this.props.user.id);
    }
  }

  async unfollow() {
    const response = await axios.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${this.props.user.id}`,
      {
        withCredentials: true,
        headers: { "API-KEY": "8991c970-a910-48aa-8f58-0b57f2e3e339" },
      }
    );

    if (response.data.resultCode === 0) {
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
