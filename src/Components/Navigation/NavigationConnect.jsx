import { connect } from "react-redux";
import { mapStateToProps, NAVIGATION } from "../../Redux/ToProps";
import { Navigation } from "./Navigation";

export const NavigationConnect = connect(mapStateToProps(NAVIGATION))(
	Navigation
);
