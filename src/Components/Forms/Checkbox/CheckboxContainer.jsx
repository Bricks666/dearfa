import { connect } from "react-redux";
import {inputFormActionCreator} from '../../../Redux/ActionCreators/inputFormActionCreator'
import {INPUT_LOGIN} from '../../../Redux/Constants'
import { Checkbox } from "./Checkbox";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(name, isChecked) {
      dispatch(inputFormActionCreator(INPUT_LOGIN, name, isChecked));
    },
  };
};

export const CheckboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);
