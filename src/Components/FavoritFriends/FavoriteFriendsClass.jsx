import { Component } from "react";
import { getFavoriteFriends } from "../../DAL/api";
import { FavoritFriends } from "./FavoritFriends";

export class FavoriteFriendsClass extends Component {
  async componentDidMount() {
    if (this.props.isLoaded === false) {
      this.props.startLoadingFavoriteFriends();

      const friends = await getFavoriteFriends();

      this.props.setFavoriteFriends(friends);

      this.props.endLoadingFavoriteFriends();
    }
  }

  render() {
    return (
      <FavoritFriends
        className={this.props.className}
        friends={this.props.friends}
      />
    );
  }
}
