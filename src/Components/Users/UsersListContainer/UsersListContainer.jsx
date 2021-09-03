import { connect } from "react-redux";
import { UsersList } from "../../Shared/UsersList/UsersList";

import { mapDispatchToProps } from "../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/mapStateToProps";

export const UsersListContainer = connect(
  mapStateToProps("UsersList"),
  mapDispatchToProps("UsersList")
)(UsersList);
