import { connect } from "react-redux";
import { FRIENDS_PAGES_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { PagesListClass } from "./PagesListClass";

export const PageListConnect = connect(
  mapStateToProps(FRIENDS_PAGES_LIST),
  mapDispatchToProps(FRIENDS_PAGES_LIST)
)(PagesListClass);
