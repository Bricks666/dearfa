import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	USERS,
} from "../../Redux/ToProps";
import { Users } from "./Users";

export const UsersConnect = connect(
	mapStateToProps(USERS),
	mapDispatchToProps(USERS)
)(Users);
