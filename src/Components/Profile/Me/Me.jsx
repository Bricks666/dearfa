import React, { Component } from "react";
import { connect } from "react-redux";
import { ME } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Profile } from "../../Shared/Profile/Profile";
import { addLoading } from "../../Shared/AddLoading/AddLoading";
import { MeInfo } from "./MeInfo/MeInfo";

const WithLoading = addLoading(Profile);

class Me extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newStatus: "",
		};
	}

	componentDidMount() {
		this.props.loadMe(this.props.id);
	}

	render() {
		return (
			<WithLoading
				className={this.props.className}
				user={this.props.me}
				isLoading={this.props.isLoading}
				ProfileInfo={MeInfo}
			/>
		);
	}
}

export const MeContainer = connect(
	mapStateToProps(ME),
	mapDispatchToProps(ME)
)(Me);
