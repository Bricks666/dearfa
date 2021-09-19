import { connect } from "react-redux";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";
import { Dialog } from "./Dialog";
import { DIALOG } from "../../../../Redux/ToProps/componentsConstants";

export const DialogContainer = connect(mapStateToProps(DIALOG))(Dialog);
