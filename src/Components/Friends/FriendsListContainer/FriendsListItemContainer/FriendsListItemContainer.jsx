import { connect } from "react-redux";
import { FRIENDS_LIST_ITEM } from "../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { FriendsListItemClass } from "./FriendsListItemClass";

export const FriendListItemContainer = connect(
	mapStateToProps(FRIENDS_LIST_ITEM),
	mapDispatchToProps(FRIENDS_LIST_ITEM)
)(FriendsListItemClass);
