import { INPUT_POST } from "../Constants";

export const inputPostActionCreator = (value) => {
  return {
    type: INPUT_POST,
    text: value,
  };
};
