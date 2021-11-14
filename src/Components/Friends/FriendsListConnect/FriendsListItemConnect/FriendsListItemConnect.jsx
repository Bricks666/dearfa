import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	FRIENDS_LIST_ITEM,
} from "../../../../Redux/ToProps";
import { FriendsListItemClass } from "./FriendsListItemClass";

export const FriendListItemConnect = connect(
	mapStateToProps(FRIENDS_LIST_ITEM),
	mapDispatchToProps(FRIENDS_LIST_ITEM)
)(FriendsListItemClass);
