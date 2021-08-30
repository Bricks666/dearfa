import { connect } from "react-redux";
import { UserInfo } from "./UserInfo";

const mapStateToProps = (state) => {
  debugger;
  return {
    user: state.user,
  };
};

export const UserInfoContainer = connect(mapStateToProps)(UserInfo);
