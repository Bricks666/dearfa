import { ADD_MESSAGE } from "../Constants";

export const addMessageActionCreator = (fieldName) => {
  return {
    type: ADD_MESSAGE,
    fieldName,
  };
};
