import { connect } from "react-redux";
import { LOGOUT_BUTTON } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { Button } from "../../Shared/Buttons/Button/Button";

export const LogoutButton = connect(
	null,
	mapDispatchToProps(LOGOUT_BUTTON)
)(Button);
