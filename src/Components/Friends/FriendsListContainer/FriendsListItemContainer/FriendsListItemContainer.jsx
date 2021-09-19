import { connect } from "react-redux";
import { UsersListItem } from "../../../Shared/UsersListItem/UsersListItem";
import { FRIENDS_LIST_ITEM } from "../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";

export const FriendListItemContainer = connect(
  mapStateToProps(FRIENDS_LIST_ITEM),
  mapDispatchToProps(FRIENDS_LIST_ITEM)
)(UsersListItem);
