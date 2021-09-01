import { connect } from "react-redux";
import { UsersList } from "../../Shared/UsersList/UsersList";

import { mapStateToProps } from "../../../Redux/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/mapDispatchToProps";

export const FriendsListContainer = connect(
  mapStateToProps("FriendsList"),
  mapDispatchToProps("FriendsList")
)(UsersList);
