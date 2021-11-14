import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	FRIENDS_LIST,
} from "../../../Redux/ToProps";
import { FriendsListClass } from "./FriendsListClass";
import { withRouter } from "react-router";
import { compose } from "redux";

export const FriendsListConnect = compose(
	connect(mapStateToProps(FRIENDS_LIST), mapDispatchToProps(FRIENDS_LIST)),
	withRouter
)(FriendsListClass);
