import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../Redux/mapDispatchToProps";
import { Button } from "../../Shared/Buttons/Button/Button";

export const UsersButton = connect(
  null,
  mapDispatchToProps("MoreUsers")
)(Button);
