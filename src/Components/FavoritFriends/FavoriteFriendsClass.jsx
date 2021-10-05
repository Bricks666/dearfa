import React, { Component } from "react";
import { FavoritFriends } from "./FavoritFriends";

export class FavoriteFriendsClass extends Component {
	componentDidMount() {
		this.props.loadFavoriteFriends(this.props.isLoaded);
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
