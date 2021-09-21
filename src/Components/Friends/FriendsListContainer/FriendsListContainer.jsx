import { connect } from "react-redux";
import { FRIENDS_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { FriendsListClass } from "./FriendsListClass";

export const FriendsListContainer = connect(
  mapStateToProps(FRIENDS_LIST),
  mapDispatchToProps(FRIENDS_LIST)
)(FriendsListClass);
