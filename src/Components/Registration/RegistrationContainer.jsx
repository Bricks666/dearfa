import { connect } from "react-redux";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Registration } from "./Registration";
import { REG } from "../../Redux/ToProps/componentsConstants";

export const RegistrationContainer = connect(mapStateToProps(REG))(
	Registration
);
