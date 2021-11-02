import { connect } from "react-redux";
import { CHANGE_CONTACTS } from "../../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { ChangeProfile } from "./ChangeProfile";

export const ChangeProfileConnect = connect(
	mapStateToProps(CHANGE_CONTACTS),
	mapDispatchToProps(CHANGE_CONTACTS)
)(ChangeProfile);
