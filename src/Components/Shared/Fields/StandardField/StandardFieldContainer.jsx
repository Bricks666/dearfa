import { StandardField } from "./StandardFields";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";

export const StandardFieldContainer = connect(
  mapStateToProps("StandardField"),
  mapDispatchToProps("StandardField")
)(StandardField);
