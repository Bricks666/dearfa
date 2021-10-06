import React, { Component } from "react";
import { addLoading } from "../../Shared/AddLoading/AddLoading";
import { UsersList } from "../../Shared/UsersList/UsersList";

const WithLoading = addLoading(UsersList);

export class UsersListClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: props.match.params.page,
		};
	}

	componentDidMount() {
		if (this.props.users.length !== 0) {
			return;
		}
		this.props.loadUsers(this.props.usersCount, this.state.page);
	}

	componentDidUpdate() {
		if (this.state.page !== this.props.match.params.page) {
			this.props.loadUsers(this.props.usersCount, this.props.match.params.page);
			this.setState({ page: this.props.match.params.page });
		}
	}

	render() {
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
