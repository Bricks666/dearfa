import { connect } from "react-redux";
import { PAGES_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { PagesListClass } from "./PagesListClass";

export const PagesListContainer = connect(
  mapStateToProps(PAGES_LIST),
  mapDispatchToProps(PAGES_LIST)
)(PagesListClass);
