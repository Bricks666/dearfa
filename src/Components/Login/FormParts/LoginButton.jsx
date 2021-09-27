import { connect } from "react-redux";
import { LOGIN_BUTTON } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Button } from "../../Shared/Buttons/Button/Button";

export const LoginButton = connect(
  mapStateToProps(LOGIN_BUTTON),
  mapDispatchToProps(LOGIN_BUTTON)
)(Button);
