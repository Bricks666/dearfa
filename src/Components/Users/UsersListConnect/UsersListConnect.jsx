import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import {
	mapDispatchToProps,
	mapStateToProps,
	USERS_LIST,
} from "../../../Redux/ToProps";
import { UsersListClass } from "../UsersListClass/UsersListClass";

export const UsersListConnect = compose(
	connect(mapStateToProps(USERS_LIST), mapDispatchToProps(USERS_LIST)),
	withRouter
)(UsersListClass);
