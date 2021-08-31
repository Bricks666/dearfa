import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";

import { Make } from "../../../Shared/Make/Make";

export const MakePostContainer = connect(
  mapStateToProps("MakePost"),
  mapDispatchToProps("MakePost")
)(Make);
