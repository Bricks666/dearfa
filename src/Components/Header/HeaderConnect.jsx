import { connect } from "react-redux";
import { mapStateToProps, HEADER } from "../../Redux/ToProps";
import { Header } from "./Header";

export const HeaderConnect = connect(mapStateToProps(HEADER))(Header);
