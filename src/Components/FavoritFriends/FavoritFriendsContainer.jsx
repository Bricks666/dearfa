import { connect } from "react-redux";
import { FavoritFriends } from "./FavoritFriends";
import { FAVORITE_FRIENDS } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";

export const FavoritFriendsContainer = connect(
  mapStateToProps(FAVORITE_FRIENDS),
  mapDispatchToProps(FAVORITE_FRIENDS)
)(FavoritFriends);
