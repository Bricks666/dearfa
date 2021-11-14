import { connect } from "react-redux";
import { mapStateToProps, DIALOG } from "../../../../Redux/ToProps";
import { Dialog } from "./Dialog";

export const DialogConnect = connect(mapStateToProps(DIALOG))(Dialog);
