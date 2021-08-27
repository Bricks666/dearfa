import { INPUT_LOGIN } from "../Constants";

export const inputLoginActionCreator = (name, value) => {
  return {
    type: INPUT_LOGIN,
    name,
    value,
  };
};
