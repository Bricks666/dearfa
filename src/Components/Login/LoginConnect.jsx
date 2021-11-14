import { connect } from "react-redux";
import { Login } from "./Login";
import {
	mapDispatchToProps,
	LOGIN,
	mapStateToProps,
} from "../../Redux/ToProps";

export const LoginConnect = connect(
	mapStateToProps(LOGIN),
	mapDispatchToProps(LOGIN)
)(Login);
