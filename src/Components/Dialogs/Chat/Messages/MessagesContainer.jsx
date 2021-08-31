import { connect } from "react-redux";
import { Messages } from "./Messages";

import { mapDispatchToProps } from "../../../../Redux/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/mapStateToProps";

export const MessagesContainer = connect(
  mapStateToProps("Messages"),
  mapDispatchToProps("Messages")
)(Messages);
