import { connect } from "react-redux";
import { REG_FULLNAME } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const FullNameField = connect(
  mapStateToProps(REG_FULLNAME),
  mapDispatchToProps(REG_FULLNAME)
)(Field);
