import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, APP } from "../Redux/ToProps";
import { App } from "./App";

export const AppConnect = connect(
	mapStateToProps(APP),
	mapDispatchToProps(APP)
)(App);
