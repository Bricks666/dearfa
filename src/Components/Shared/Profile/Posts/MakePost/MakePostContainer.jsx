import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";
import { MAKE_POST } from "../../../../../Redux/ToProps/componentsConstants";
import { Make } from "../../../Make/Make";

export const MakePostContainer = connect(
	mapStateToProps(MAKE_POST),
	mapDispatchToProps(MAKE_POST)
)(Make);
