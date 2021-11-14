import { connect } from "react-redux";
import {
	mapDispatchToProps,
	mapStateToProps,
	USERS_PAGES_LIST,
} from "../../../Redux/ToProps";
import { PagesListWithRouting } from "../../Shared";

export const PagesListConnect = connect(
	mapStateToProps(USERS_PAGES_LIST),
	mapDispatchToProps(USERS_PAGES_LIST)
)(PagesListWithRouting);
