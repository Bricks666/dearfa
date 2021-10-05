import { connect } from "react-redux";
import { USERS } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Users } from "./Users";

export const UsersContainer = connect(
	mapStateToProps(USERS),
	mapDispatchToProps(USERS)
)(Users);
