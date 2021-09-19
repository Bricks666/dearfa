import { SET_USER_INFO } from "../Constants";

export const setUserInfo = (info) => {
  return {
    type: SET_USER_INFO,
    info,
  };
};
