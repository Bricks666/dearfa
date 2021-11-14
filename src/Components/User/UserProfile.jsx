import React, { Component } from "react";
import { Profile, withLoading } from "../Shared";
import { UserInfo } from "./UserInfo/UserInfo";

const WithLoading = withLoading(Profile);

export class UserProfile extends Component {
	loadProfile() {
		this.props.loadProfile(this.props.match.params.id);
	}

	componentDidMount() {
		this.loadProfile();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
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
