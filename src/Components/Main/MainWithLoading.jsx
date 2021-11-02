import { compose } from "redux";
import { connect } from "react-redux";
import { MAIN } from "../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { withLoading } from "../Shared/withLoading/withLoading";
import { Main } from "./Main";

export const MainWithLoading = compose(
	connect(mapStateToProps(MAIN)),
	withLoading
)(Main);
