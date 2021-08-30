import { connect } from "react-redux";
import { addMessageActionCreator } from "../../../../Redux/ActionCreators/addMessage";
import { inputMessageActionCreator } from "../../../../Redux/ActionCreators/inputMessage";
import { Make } from "../../../Shared/Make/Make";

const mapStateToProps = (state) => {
  return {
    content: state.chats[0].newMessageContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch(addMessageActionCreator());
    },
    input(text) {
      dispatch(inputMessageActionCreator(text));
    },
  };
};

export const MakeMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Make);
