import { connect } from "react-redux";
import { mapStateToProps, FRIENDS } from "../../Redux/ToProps";
import { Friends } from "./Friends";

export const FriendsConnect = connect(mapStateToProps(FRIENDS))(Friends);
