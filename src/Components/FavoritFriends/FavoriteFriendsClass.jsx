import React, { Component } from "react";
import { FavoritFriends } from "./FavoritFriends";
import { withLoading } from "../Shared/withLoading/withLoading";

const WithLoading = withLoading(FavoritFriends);

export class FavoriteFriendsClass extends Component {
	componentDidMount() {
		this.props.loadFavoriteFriends();
	}

	render() {
		return (
			<WithLoading
				className={this.props.className}
				friends={this.props.friends}
				isLoading={this.props.isLoading}
			/>
		);
	}
}
