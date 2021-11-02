import { connect } from "react-redux";
import { ME_INFO } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { MeInfo } from "./MeInfo";

export const MeInfoConnect = connect(null, mapDispatchToProps(ME_INFO))(MeInfo);
