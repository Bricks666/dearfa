import React, { Component } from "react";
import { Profile } from "../Shared/Profile/Profile";
import { addLoading } from "../Shared/AddLoading/AddLoading";
import { UserInfo } from "./UserInfo/UserInfo";

const WithLoading = addLoading(Profile);

export class UserProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.user.userId,
		};
	}

	loadProfile() {
		this.props.loadProfile(this.props.match.params.id);
		this.setState({ id: this.props.match.params.id });
	}

	componentDidMount() {
		this.loadProfile();
	}

	componentDidUpdate() {
		if (this.state.id !== this.props.match.params.id) {
			this.loadProfile();
		}
	}
	render() {
		return (
			<WithLoading
				className={this.props.className}
				user={this.props.user}
				isLoading={this.props.isLoading}
				ProfileInfo={UserInfo}
			/>
		);
	}
}
