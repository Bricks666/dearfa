import { connect } from "react-redux";
import { USERS_PAGES_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { PagesListWithRouting } from "../../Shared/PagesList/PagesListWithRouting";

export const PagesListContainer = connect(
	mapStateToProps(USERS_PAGES_LIST),
	mapDispatchToProps(USERS_PAGES_LIST)
)(PagesListWithRouting);
