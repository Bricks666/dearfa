import { connect } from "react-redux";
import { FRIENDS_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { FriendsListClass } from "./FriendsListClass";
import { withRouter } from "react-router";

export const FriendsListContainer = connect(
	mapStateToProps(FRIENDS_LIST),
	mapDispatchToProps(FRIENDS_LIST)
)(withRouter(FriendsListClass));
