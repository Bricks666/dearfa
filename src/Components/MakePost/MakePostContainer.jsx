import { connect } from "react-redux";
import { addPostActionCreator } from "../../Redux/ActionCreators/addPost";
import { inputPostActionCreator } from "../../Redux/ActionCreators/inputPostActionCreator";
import { MakePost } from "./MakePost";

const mapStateToProps = (state) => {
  return {
    content: state.posts.newPostContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostActionCreator());
    },
    inputPost(text) {
      dispatch(inputPostActionCreator(text));
    },
  };
};

export const MakePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakePost);
