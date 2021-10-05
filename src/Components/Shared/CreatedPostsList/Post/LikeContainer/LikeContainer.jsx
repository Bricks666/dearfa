import { connect } from "react-redux";
import { Like } from "../../../Like/Like";
import { LIKE } from "../../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/ToProps/mapStateToProps";

export const LikeContainer = connect(
	mapStateToProps(LIKE),
	mapDispatchToProps(LIKE)
)(Like);
