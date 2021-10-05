import { connect } from "react-redux";
import { REG_PASSWORD_AGAIN } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const PasswordAgainField = connect(
	mapStateToProps(REG_PASSWORD_AGAIN),
	mapDispatchToProps(REG_PASSWORD_AGAIN)
)(Field);
