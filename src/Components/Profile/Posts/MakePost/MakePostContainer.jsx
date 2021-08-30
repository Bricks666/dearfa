import { connect } from "react-redux";
import { addPostActionCreator } from "../../../../Redux/ActionCreators/addPost";
import { inputPostActionCreator } from "../../../../Redux/ActionCreators/inputPost";
import { Make } from "../../../Shared/Make/Make";

const mapStateToProps = (state) => {
  return {
    content: state.posts.newPostContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch(addPostActionCreator());
    },
    input(text) {
      dispatch(inputPostActionCreator(text));
    },
  };
};

export const MakePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Make);
