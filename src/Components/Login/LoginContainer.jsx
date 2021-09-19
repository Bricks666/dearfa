import { connect } from "react-redux";
import { Login } from "./Login";
import { LOGIN } from "../../Redux/ToProps/componentsConstants";

import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";

export const LoginContainer = connect(
  mapStateToProps(LOGIN),
  mapDispatchToProps(LOGIN)
)(Login);
