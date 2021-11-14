import { connect } from "react-redux";
import { mapDispatchToProps, LOGOUT_BUTTON } from "../../../Redux/ToProps";
import { Button } from "../../Shared/Buttons/Button/Button";

export const LogoutButton = connect(
	null,
	mapDispatchToProps(LOGOUT_BUTTON)
)(Button);
