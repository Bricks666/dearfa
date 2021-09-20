import { connect } from "react-redux";
import { MAIN } from "../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { addLoading } from "../Shared/AddLoading/AddLoading";
import { Main } from "./Main";

export const MainWithLoading = connect(mapStateToProps(MAIN))(addLoading(Main));
