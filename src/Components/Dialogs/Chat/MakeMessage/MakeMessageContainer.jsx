import { connect } from "react-redux";
import { Make } from "../../../Shared/Make/Make";
import { MAKE_MESSAGE } from "../../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../../Redux/ToProps/mapStateToProps";

export const MakeMessageContainer = connect(
  mapStateToProps(MAKE_MESSAGE),
  mapDispatchToProps(MAKE_MESSAGE)
)(Make);
