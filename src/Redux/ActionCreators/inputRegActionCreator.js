import { INPUT_REG } from "../Constants";

export const inputRegActionCreator = (name, value) => {
  return {
    type: INPUT_REG,
    name,
    value,
  };
};
