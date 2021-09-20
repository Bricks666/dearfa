import { FOLLOW_USER } from "../Constants";

export const followUserActionCreator = (id) => {
  return {
    type: FOLLOW_USER,
    id,
  };
};
