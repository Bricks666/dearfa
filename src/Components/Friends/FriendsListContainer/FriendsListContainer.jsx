import { connect } from "react-redux";
import { FRIENDS_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { FriendsListClass } from "./FriendsListClass";
import { withRouter } from "react-router";
import { compose } from "redux";

export const FriendsListContainer = compose(
	connect(mapStateToProps(FRIENDS_LIST), mapDispatchToProps(FRIENDS_LIST)),
	withRouter
)(FriendsListClass);
