import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	FRIENDS_PAGES_LIST,
} from "../../../Redux/ToProps";
import { PagesListWithRouting } from "../../Shared";

export const PageListConnect = connect(
	mapStateToProps(FRIENDS_PAGES_LIST),
	mapDispatchToProps(FRIENDS_PAGES_LIST)
)(PagesListWithRouting);
