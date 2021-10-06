import { connect } from "react-redux";
import { FRIENDS_PAGES_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { PagesListWithRouting } from "../../Shared/PagesList/PagesListWithRouting";

export const PageListConnect = connect(
	mapStateToProps(FRIENDS_PAGES_LIST),
	mapDispatchToProps(FRIENDS_PAGES_LIST)
)(PagesListWithRouting);
