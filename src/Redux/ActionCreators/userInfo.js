import { GET_USER_INFO } from "../Constants";

export const userInfoActionCreator = (id) => {
  return {
    type: GET_USER_INFO,
    id,
  };
};
