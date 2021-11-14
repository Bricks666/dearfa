import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	CHANGE_CONTACTS,
} from "../../../../Redux/ToProps";
import { ChangeProfile } from "./ChangeProfile";

export const ChangeProfileConnect = connect(
	mapStateToProps(CHANGE_CONTACTS),
	mapDispatchToProps(CHANGE_CONTACTS)
)(ChangeProfile);
