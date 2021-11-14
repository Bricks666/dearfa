import { connect } from "react-redux";
import { mapDispatchToProps, ME_STATUS } from "../../../../Redux/ToProps";
import { MeStatus } from "./MeStatus";

export const MeStatusConnect = connect(
	null,
	mapDispatchToProps(ME_STATUS)
)(MeStatus);
