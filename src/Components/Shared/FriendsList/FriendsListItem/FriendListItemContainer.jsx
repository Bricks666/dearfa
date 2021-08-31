import { FriendsListItem } from "./FriendListItem";
import { connect } from "react-redux";

import { mapDispatchToProps } from "../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";

export const FriendListItemContainer = connect(
  mapStateToProps("FriendsListItem"),
  mapDispatchToProps("FriendsListItem")
)(FriendsListItem);
