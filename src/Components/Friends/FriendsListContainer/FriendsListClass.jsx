import React, { Component } from "react";
import { UsersList } from "../../Shared/UsersList/UsersList";
import { addLoading } from "../../Shared/AddLoading/AddLoading";

const WithLoading = addLoading(UsersList);
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
		this.setState({ page: this.props.match.params.page });
	}

	componentDidMount() {
		this.loadFriends();
	}

	componentDidUpdate() {
		if (this.state.page !== this.props.match.params.page) {
			this.loadFriends();
		}
	}
	render() {
		return (
			<WithLoading
				className={this.props.className}
				render={this.props.render}
				users={this.props.friends}
				isLoading={this.props.isLoading}
			/>
		);
	}
}
