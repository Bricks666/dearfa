import { connect } from "react-redux";
import { CreatedPostsList } from "./CreatedPostsList";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const CreatedPostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatedPostsList);
