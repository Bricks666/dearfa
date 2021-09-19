import { StandardField } from "./StandardFields";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { STANDARD_FIELD } from "../../../../Redux/ToProps/componentsConstants";

export const StandardFieldContainer = connect(
  mapStateToProps(STANDARD_FIELD),
  mapDispatchToProps(STANDARD_FIELD)
)(StandardField);
