import { connect } from "react-redux";
import { DIALOGS } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Dialogs } from "./Dialogs";

export const DialogsConnect = connect(
	mapStateToProps(DIALOGS),
	mapDispatchToProps(DIALOGS)
)(Dialogs);
