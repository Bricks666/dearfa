import { connect } from "react-redux";
import { FRIENDS_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { FriendsListClass } from "./FriendsListClass";
import { addLoading } from "../../Shared/AddLoading/AddLoading";

export const FriendsListContainer = connect(
	mapStateToProps(FRIENDS_LIST),
	mapDispatchToProps(FRIENDS_LIST)
)(addLoading(FriendsListClass));
