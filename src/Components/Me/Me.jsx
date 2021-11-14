import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, ME } from "../../Redux/ToProps";
import { Profile, withLoading } from "../Shared";
import { MeInfoConnect } from "./MeInfo/MeInfoConnect";

const WithLoading = withLoading(Profile);

class Me extends Component {
	componentDidMount() {
		this.props.loadMe(this.props.me.userId);
	}

	render() {
		return (
			<WithLoading
				className={this.props.className}
				user={this.props.me}
				isLoading={this.props.isLoading}
				ProfileInfo={MeInfoConnect}
			/>
		);
	}
}

export const MeConnect = connect(
	mapStateToProps(ME),
	mapDispatchToProps(ME)
)(Me);
