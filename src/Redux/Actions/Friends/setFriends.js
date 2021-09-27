import { SET_FRIENDS } from "../../ActionsConstants";

export const setFriends = (data) => {
  return {
    type: SET_FRIENDS,
    data,
  };
};
