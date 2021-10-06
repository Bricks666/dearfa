import { connect } from "react-redux";
import { withRouter } from "react-router";
import { USERS_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { UsersListClass } from "../UsersListClass/UsersListClass";

export const UsersListContainer = connect(
	mapStateToProps(USERS_LIST),
	mapDispatchToProps(USERS_LIST)
)(withRouter(UsersListClass));
