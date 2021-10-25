import { connect } from "react-redux";
import { CHANGE_PROFILE } from "../../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { ChangeProfile } from "./ChangeProfile";

export const ChangeProfileConnect = connect(mapStateToProps(CHANGE_PROFILE))(
	ChangeProfile
);
