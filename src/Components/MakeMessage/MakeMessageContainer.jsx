import { connect } from "react-redux";
import { addMessageActionCreator } from "../../Redux/ActionCreators/addMessage";
import { inputMessageActionCreator } from "../../Redux/ActionCreators/inputMessageActionCreator";
import { MakeMessage } from "./MakeMessage";

const mapStateToProps = (state) => {
  return {
    content: state.chats[0].newMessageContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage() {
      dispatch(addMessageActionCreator());
    },
    inputMessage(text) {
      dispatch(inputMessageActionCreator(text));
    },
  };
};

export const MakeMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeMessage);
