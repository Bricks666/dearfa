import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { PROFILE } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { UserProfile } from "./UserProfile";

export const UserProfileConnect = compose(
	connect(mapStateToProps(PROFILE), mapDispatchToProps(PROFILE)),
	withRouter
)(UserProfile);
