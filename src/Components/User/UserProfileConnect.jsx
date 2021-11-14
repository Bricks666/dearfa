import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	PROFILE,
} from "../../Redux/ToProps";
import { UserProfile } from "./UserProfile";

export const UserProfileConnect = compose(
	connect(mapStateToProps(PROFILE), mapDispatchToProps(PROFILE)),
	withRouter
)(UserProfile);
