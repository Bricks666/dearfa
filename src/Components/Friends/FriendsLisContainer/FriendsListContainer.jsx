import { connect } from "react-redux";
import { FriendsList } from "../../Shared/FriendsList/FriendsList";

import { mapStateToProps } from "../../../Redux/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/mapDispatchToProps";

export const FriendsListContainer = connect(
  mapStateToProps("FriendsList"),
  mapDispatchToProps("FriendsList")
)(FriendsList);
