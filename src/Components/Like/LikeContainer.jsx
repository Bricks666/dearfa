import { Like } from "./Like";
import { toggleLikeActionCreator } from "../../Redux/ActionCreators/toggleLike";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* export const LikeContainer = (props) => {
  const toggle = () => {
    const action = toggleLikeActionCreator(props.postId);

    props.dispatch(action);
  };

  return (
    <Like className={props.className} status={props.status} toggle={toggle} />
  );
}; */

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: bindActionCreators(toggleLikeActionCreator, dispatch),
  };
};

export const LikeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
