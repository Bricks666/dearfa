import { connect } from "react-redux";
import { REG_BUTTON } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../Shared/Buttons/Button/Button";

export const RegistrationButton = connect(
	mapStateToProps(REG_BUTTON),
	mapDispatchToProps(REG_BUTTON)
)(Button);
