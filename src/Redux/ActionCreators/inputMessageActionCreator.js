import { INPUT_MESSAGE } from "../Constants";

export const inputMessageActionCreator = (value) => {
  return {
    type: INPUT_MESSAGE,
    text: value,
  };
};
