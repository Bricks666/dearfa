import { connect } from "react-redux";
import { FRIENDS } from "../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Friends } from "./Friends";

export const FriendsContainer = connect(mapStateToProps(FRIENDS))(Friends);
