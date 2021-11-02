import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { CHAT } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { Chat } from "./Chat";

export const ChatConnect = compose(
	withRouter,
	connect(mapStateToProps(CHAT), mapDispatchToProps(CHAT))
)(Chat);
