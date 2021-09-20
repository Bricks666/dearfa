import { connect } from "react-redux";
import { HEADER } from "../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { HeaderClass } from "./HeaderClass";
import { addLoading } from "../Shared/AddLoading/AddLoading";

export const HeaderContainer = connect(
  mapStateToProps(HEADER),
  mapDispatchToProps(HEADER)
)(addLoading(HeaderClass));
