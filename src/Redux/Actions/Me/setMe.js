import { SET_ME } from "../Constants";

export const setMe = (me) => {
  return {
    type: SET_ME,
    me,
  };
};
