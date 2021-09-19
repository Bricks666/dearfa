import { connect } from "react-redux";
import { UsersList } from "../../Shared/UsersList/UsersList";
import { FRIENDS_LIST } from "../../../Redux/ToProps/componentsConstants";
import { mapStateToProps } from "../../../Redux/ToProps/mapStateToProps";
import { mapDispatchToProps } from "../../../Redux/ToProps/mapDispatchToProps";

export const FriendsListContainer = connect(
  mapStateToProps(FRIENDS_LIST),
  mapDispatchToProps(FRIENDS_LIST)
)(UsersList);
