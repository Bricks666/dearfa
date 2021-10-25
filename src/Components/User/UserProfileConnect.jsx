import { connect } from "react-redux";
import { withRouter } from "react-router";
import { PROFILE } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { UserProfile } from "./UserProfile";

export const UserProfileConnect = connect(
	mapStateToProps(PROFILE),
	mapDispatchToProps(PROFILE)
)(withRouter(UserProfile));
