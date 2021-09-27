import { SET_ME } from "../../ActionsConstants";

export const setMe = (me) => {
  return {
    type: SET_ME,
    me,
  };
};
