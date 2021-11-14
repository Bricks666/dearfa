import { connect } from "react-redux";
import { mapDispatchToProps, ME_INFO } from "../../../Redux/ToProps";
import { MeInfo } from "./MeInfo";

export const MeInfoConnect = connect(null, mapDispatchToProps(ME_INFO))(MeInfo);
