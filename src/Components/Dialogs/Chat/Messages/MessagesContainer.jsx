import { connect } from "react-redux";
import { Messages } from "./Messages";
import { MESSAGES } from "../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";

export const MessagesContainer = connect(
  mapStateToProps(MESSAGES),
  mapDispatchToProps(MESSAGES)
)(Messages);
