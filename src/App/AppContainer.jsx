import { connect } from "react-redux";
import { APP } from "../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../Redux/ToProps/mapStateToProps";
import { App } from "./App";

export const AppContainer = connect(mapStateToProps(APP))(App);
