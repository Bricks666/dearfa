import { connect } from "react-redux";
import { CreatedPostsList } from "../CreatedPostsList/CreatedPostsList";

import { mapStateToProps } from "../../../Redux/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/mapDispatchToProps";

export const CreatedPostsListContainer = connect(
  mapStateToProps("CreatedPostsList"),
  mapDispatchToProps("CreatedPostsList")
)(CreatedPostsList);
