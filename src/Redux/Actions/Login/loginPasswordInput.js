import { LOGIN_PASSWORD_INPUT } from "../../ActionsConstants";

export const loginPasswordInput = (password) => {
  return {
    type: LOGIN_PASSWORD_INPUT,
    password,
  };
};
