import { connect } from "react-redux";
import { FAVORITE_FRIENDS } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { FavoriteFriendsClass } from "./FavoriteFriendsClass";
import { addLoading } from "../Shared/AddLoading/AddLoading";

export const FavoritFriendsContainer = connect(
  mapStateToProps(FAVORITE_FRIENDS),
  mapDispatchToProps(FAVORITE_FRIENDS)
)(addLoading(FavoriteFriendsClass));
