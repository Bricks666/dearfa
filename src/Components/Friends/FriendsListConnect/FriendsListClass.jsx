import React, { Component } from "react";
import { UsersList, withLoading } from "../../Shared";

const WithLoading = withLoading(UsersList);
export class FriendsListClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: props.match.params.page,
		};
	}

	loadFriends() {
		this.props.loadFriends(
			this.props.friendsCount,
			this.props.match.params.page
		);
	}

	componentDidMount() {
		this.loadFriends();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.page !== this.props.match.params.page) {
			this.loadFriends();
		}
	}
	render() {
		return (
			<WithLoading
				className={this.props.className}
				Card={this.props.Card}
				users={this.props.friends}
				isLoading={this.props.isLoading}
			/>
		);
	}
}
