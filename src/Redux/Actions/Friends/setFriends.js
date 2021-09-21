import { SET_FRIENDS } from "../Constants";

export const setFriends = (data) => {
  return {
    type: SET_FRIENDS,
    data,
  };
};
