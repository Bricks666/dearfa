import { Like } from "./Like";
import { toggleLikeActionCreator } from "../../../../../Redux/ActionCreators/toggleLike";
import { connect } from "react-redux";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle(id) {
      dispatch(toggleLikeActionCreator(id));
    },
  };
};

export const LikeContainer = connect(mapStateToProps, mapDispatchToProps)(Like);
