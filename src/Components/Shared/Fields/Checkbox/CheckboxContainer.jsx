import { connect } from "react-redux";
import { Checkbox } from "./Checkbox";
import { CHECKBOX } from "../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";

export const CheckboxContainer = connect(
  mapStateToProps(CHECKBOX),
  mapDispatchToProps(CHECKBOX)
)(Checkbox);
