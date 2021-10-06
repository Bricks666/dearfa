import { connect } from "react-redux";
import { ME_STATUS } from "../../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../../Redux/ToProps/mapDispatchToProps";
import { MeStatus } from "./MeStatus";

export const MeStatusConnect = connect(
	null,
	mapDispatchToProps(ME_STATUS)
)(MeStatus);
