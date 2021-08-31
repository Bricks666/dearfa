import { connect } from "react-redux";
import { Make } from "../../../Shared/Make/Make";

import { mapDispatchToProps } from "../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";

export const MakeMessageContainer = connect(
  mapStateToProps("MakeMessage"),
  mapDispatchToProps("MakeMessage")
)(Make);
