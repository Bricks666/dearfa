import { connect } from "react-redux";
import { Login } from "./Login";

import { mapStateToProps } from "../../Redux/mapStateToProps";
import { mapDispatchToProps } from "../../Redux/mapDispatchToProps";

export const LoginContainer = connect(
  mapStateToProps("Login"),
  mapDispatchToProps("Login")
)(Login);
