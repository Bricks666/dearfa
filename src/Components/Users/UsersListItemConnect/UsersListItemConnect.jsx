import { connect } from "react-redux";
import {} from "../../../Redux/ToProps/componentsConstants";
import {
	mapDispatchToProps,
	mapStateToProps,
	USERS_LIST_ITEM,
} from "../../../Redux/ToProps";
import { UsersListItemClass } from "./UsersListItemClass";

export const UsersListItemConnect = connect(
	mapStateToProps(USERS_LIST_ITEM),
	mapDispatchToProps(USERS_LIST_ITEM)
)(UsersListItemClass);
