import { connect } from "react-redux";
import { LOGIN_EMAIL } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Field } from "../../Shared/Field/Field";

export const EmailField = connect(
	mapStateToProps(LOGIN_EMAIL),
	mapDispatchToProps(LOGIN_EMAIL)
)(Field);
