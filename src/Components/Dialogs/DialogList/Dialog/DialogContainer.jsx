import { connect } from "react-redux";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";
import { Dialog } from "./Dialog";

export const DialogContainer = connect(mapStateToProps("Dialog"))(Dialog);
