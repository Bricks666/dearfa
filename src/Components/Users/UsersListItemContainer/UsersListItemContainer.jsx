import { connect } from "react-redux";
import { UsersListItem } from "../../Shared/UsersListItem/UsersListItem";

import { mapDispatchToProps } from "../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/mapStateToProps";

export const UsersListItemContainer = connect(
  mapStateToProps("UsersListItem"),
  mapDispatchToProps("UsersListItem")
)(UsersListItem);
