import { INPUT_POST } from "../../ActionsConstants";

export const inputPostActionCreator = (value) => {
  return {
    type: INPUT_POST,
    text: value,
  };
};
