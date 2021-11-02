import { connect } from "react-redux";
import { HEADER } from "../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Header } from "./Header";

export const HeaderContainer = connect(mapStateToProps(HEADER))(Header);
