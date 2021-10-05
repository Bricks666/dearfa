import { connect } from "react-redux";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { REG_EMAIL } from "../../../Redux/ToProps/componentsConstants";
import { Field } from "../../Shared/Field/Field";

export const EmailField = connect(
	mapStateToProps(REG_EMAIL),
	mapDispatchToProps(REG_EMAIL)
)(Field);
