import { connect } from "react-redux";
import { FavoritFriends } from "./FavoritFriends";

import { mapDispatchToProps } from "../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/mapStateToProps";

export const FavoritFriendsContainer = connect(
  mapStateToProps("FavoritFriends"),
  mapDispatchToProps("FavoritFriends")
)(FavoritFriends);
