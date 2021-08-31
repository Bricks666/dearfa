import { connect } from "react-redux";
import { Like } from "../../../Like/Like";

import { mapDispatchToProps } from "../../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../../Redux/mapStateToProps";

export const LikeContainer = connect(
  mapStateToProps("Like"),
  mapDispatchToProps("Like")
)(Like);
