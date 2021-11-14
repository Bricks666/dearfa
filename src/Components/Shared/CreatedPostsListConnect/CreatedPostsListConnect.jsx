import { connect } from "react-redux";
import { CreatedPostsList } from "../CreatedPostsList/CreatedPostsList";
import { CREATED_POSTS } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";

export const CreatedPostsListConnect = connect(
	mapStateToProps(CREATED_POSTS)
)(CreatedPostsList);
