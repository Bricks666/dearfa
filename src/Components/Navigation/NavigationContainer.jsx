import { connect } from "react-redux";
import { NAVIGATION } from "../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Navigation } from "./Navigation";

export const NavigationContainer = connect(mapStateToProps(NAVIGATION))(
  Navigation
);
