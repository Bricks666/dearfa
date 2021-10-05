import React, { Component } from "react";
import { addLoading } from "../../Shared/AddLoading/AddLoading";
import { UsersList } from "../../Shared/UsersList/UsersList";

export class UsersListClass extends Component {
	componentDidMount() {
		if (this.props.users.length !== 0) {
			return;
		}
		this.props.loadUsers(this.props.usersCount, this.props.currentPage);
	}

	render() {
		const WithLoading = addLoading(UsersList);

		return (
			<WithLoading
				className={this.props.className}
				render={this.props.render}
				users={this.props.users}
				isLoading={this.props.isLoading}
			/>
		);
	}
}
