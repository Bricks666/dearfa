import { connect } from "react-redux";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { Checkbox } from "../../Shared/Checkbox/Checkbox";
import { LOGIN_CHECKBOX } from "../../../Redux/ToProps/componentsConstants";

export const RememberCheckbox = connect(
	mapStateToProps(LOGIN_CHECKBOX),
	mapDispatchToProps(LOGIN_CHECKBOX)
)(Checkbox);
