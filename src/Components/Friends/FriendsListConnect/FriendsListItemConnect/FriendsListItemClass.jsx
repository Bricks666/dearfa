import React, { Component } from "react";
import { UsersListItem } from "../../../Shared";

export class FriendsListItemClass extends Component {
	unfollow() {
		this.props.unfollow(this.props.user.id);
	}

	render() {
		return (
			<UsersListItem
				className={this.props.className}
				onClick={this.unfollow.bind(this)}
				user={this.props.user}
				isDisabled={this.props.isFollowing}
			/>
		);
	}
}
