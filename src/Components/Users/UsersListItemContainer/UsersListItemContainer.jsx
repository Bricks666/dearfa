import { connect } from "react-redux";
import { UsersListItem } from "../../Shared/UsersListItem/UsersListItem";
import { USERS_LIST_ITEM } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";

export const UsersListItemContainer = connect(
  mapStateToProps(USERS_LIST_ITEM),
  mapDispatchToProps(USERS_LIST_ITEM)
)(UsersListItem);
