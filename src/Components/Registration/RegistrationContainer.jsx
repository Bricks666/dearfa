import { connect } from "react-redux";
import { mapDispatchToProps } from "../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/mapStateToProps";
import { Registration } from "./Registration";

export const RegistrationContainer = connect(
  mapStateToProps("Registration"),
  mapDispatchToProps("Registration")
)(Registration);
