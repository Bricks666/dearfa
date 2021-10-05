import React, { Component } from "react";
import { connect } from "react-redux";
import { ME } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Profile } from "./Profile";
import { addLoading } from "../Shared/AddLoading/AddLoading";

class Me extends Component {
	async componentDidMount() {
		if (this.props.isLoaded) {
			return;
		}
		this.props.loadMe(this.props.id);
	}
	render() {
		return <Profile className={this.props.className} user={this.props.me} />;
	}
}

export const MeContainer = connect(
	mapStateToProps(ME),
	mapDispatchToProps(ME)
)(addLoading(Me));
