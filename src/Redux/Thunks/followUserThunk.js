import { follow } from "../../DAL/api";
import { endFollowingUser } from "../Actions/Loadings/endFollowingUser";
import { followUserActionCreator } from "../Actions/Users/followUser";
import { startFollowingUser } from "../Actions/Loadings/startFollowingUser";

export const followUserThunk = (user) => {
  return async (dispatch) => {
    dispatch(startFollowingUser(user.id));

    const response = await follow(user.id);

    if (response.resultCode === 0) {
      dispatch(followUserActionCreator(user));
    }

    dispatch(endFollowingUser(user.id));
  };
};
