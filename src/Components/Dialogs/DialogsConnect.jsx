import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps,
	DIALOGS,
} from "../../Redux/ToProps";
import { Dialogs } from "./Dialogs";

export const DialogsConnect = connect(
	mapStateToProps(DIALOGS),
	mapDispatchToProps(DIALOGS)
)(Dialogs);
