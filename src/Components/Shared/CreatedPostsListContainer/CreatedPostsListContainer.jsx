import { connect } from "react-redux";
import { CreatedPostsList } from "../CreatedPostsList/CreatedPostsList";
import { CREATED_POSTS } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";

export const CreatedPostsListContainer = connect(
	mapStateToProps(CREATED_POSTS),
	mapDispatchToProps(CREATED_POSTS)
)(CreatedPostsList);
