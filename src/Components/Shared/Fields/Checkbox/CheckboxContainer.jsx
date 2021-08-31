import { connect } from "react-redux";
import { Checkbox } from "./Checkbox";

import { mapDispatchToProps } from "../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";

export const CheckboxContainer = connect(
  mapStateToProps("Checkbox"),
  mapDispatchToProps("Checkbox")
)(Checkbox);
