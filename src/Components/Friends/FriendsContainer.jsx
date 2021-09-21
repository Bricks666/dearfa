import { connect } from "react-redux";
import { FRIENDS } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Friends } from "./Friends";

export const FriendsContainer = connect(
  mapStateToProps(FRIENDS),
  mapDispatchToProps(FRIENDS)
)(Friends);
