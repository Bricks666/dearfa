import { FOLLOW_USER } from "../Constants";

export const followUserActionCreator = (user) => {
  return {
    type: FOLLOW_USER,
    user,
  };
};
