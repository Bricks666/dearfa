import { StandardField } from "./StandardFields";
import { inputFormActionCreator } from "../../../Redux/ActionCreators/inputFormActionCreator";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputField(type, name, text) {
      debugger;
      dispatch(inputFormActionCreator(type, name, text));
    },
  };
};

export const StandardFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardField);
