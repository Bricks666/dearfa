import { connect } from "react-redux";
import {
	mapDispatchToProps,
	mapStateToProps,
	FAVORITE_FRIENDS,
} from "../../Redux/ToProps";
import { FavoriteFriendsClass } from "./FavoriteFriendsClass";

export const FavoritFriendsConnect = connect(
	mapStateToProps(FAVORITE_FRIENDS),
	mapDispatchToProps(FAVORITE_FRIENDS)
)(FavoriteFriendsClass);
