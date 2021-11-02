import { connect } from "react-redux";
import { APP } from "../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../Redux/ToProps/mapStateToProps";
import { App } from "./App";
import { mapDispatchToProps } from "../Redux/ToProps/mapDispatchToProps";

export const AppContainer = connect(
	mapStateToProps(APP),
	mapDispatchToProps(APP)
)(App);
