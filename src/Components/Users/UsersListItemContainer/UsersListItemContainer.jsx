import { connect } from "react-redux";
import { USERS_LIST_ITEM } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { UsersListItemClass } from "./UsersListItemClass";

export const UsersListItemContainer = connect(
	mapStateToProps(USERS_LIST_ITEM),
	mapDispatchToProps(USERS_LIST_ITEM)
)(UsersListItemClass);
