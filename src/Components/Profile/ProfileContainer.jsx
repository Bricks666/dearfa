import { connect } from "react-redux";
import { withRouter } from "react-router";
import { PROFILE } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { ProfileClass } from "./ProfileClass";

export const ProfileContainer = connect(
	mapStateToProps(PROFILE),
	mapDispatchToProps(PROFILE)
)(withRouter(ProfileClass));
