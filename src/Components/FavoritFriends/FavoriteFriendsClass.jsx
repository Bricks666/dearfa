import React, { Component } from "react";
import { FavoritFriends } from "./FavoritFriends";
import { addLoading } from "../Shared/AddLoading/AddLoading";

const WithLoading = addLoading(FavoritFriends);
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
