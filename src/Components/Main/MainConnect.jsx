import { compose } from "redux";
import { connect } from "react-redux";
import { mapStateToProps, MAIN } from "../../Redux/ToProps";
import { withLoading } from "../Shared/withLoading/withLoading";
import { Main } from "./Main";

export const MainConnect = compose(
	connect(mapStateToProps(MAIN)),
	withLoading
)(Main);
