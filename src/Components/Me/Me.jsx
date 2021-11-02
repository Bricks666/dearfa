import React, { Component } from "react";
import { connect } from "react-redux";
import { ME } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Profile } from "../Shared/Profile/Profile";
import { withLoading } from "../Shared/withLoading/withLoading";
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

export const MeContainer = connect(
	mapStateToProps(ME),
	mapDispatchToProps(ME)
)(Me);
