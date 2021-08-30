import { connect } from "react-redux";
import { CreatedPosts } from "./CreatedPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const CreatedPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatedPosts);
