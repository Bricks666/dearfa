import { INPUT_MESSAGE } from "../Constants";

export const inputMessageActionCreator = (text) => {
  return {
    type: INPUT_MESSAGE,
    text,
  };
};
