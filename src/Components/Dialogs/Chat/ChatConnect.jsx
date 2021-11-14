import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
	mapDispatchToProps,
	mapStateToProps,
	CHAT,
} from "../../../Redux/ToProps";
import { Chat } from "./Chat";

export const ChatConnect = compose(
	withRouter,
	connect(mapStateToProps(CHAT), mapDispatchToProps(CHAT))
)(Chat);
