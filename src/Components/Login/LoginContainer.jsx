import { connect } from "react-redux";
import { Login } from "./Login";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { LOGIN } from "../../Redux/ToProps/componentsConstants";

export const LoginContainer = connect(mapStateToProps(LOGIN))(Login);
