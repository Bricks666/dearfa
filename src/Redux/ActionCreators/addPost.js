import { ADD_POST } from "../Constants";

export const addPostActionCreator = (fieldName) => {
  return {
    type: ADD_POST,
    fieldName,
  };
};
