import { initialState } from "../initialState";
import {
  REG_EMAIL_INPUT,
  REG_FULLNAME_INPUT,
  REG_PASSWORD_AGAIN_INPUT,
  REG_PASSWORD_INPUT,
} from "../ActionsConstants";

export const registrationReducers = (
  state = initialState.registration,
  action
) => {
  switch (action.type) {
    case REG_FULLNAME_INPUT: {
      return {
        ...state,
        fullName: action.fullName,
      };
    }
    case REG_EMAIL_INPUT: {
      return {
        ...state,
        email: action.email,
      };
    }
    case REG_PASSWORD_INPUT: {
      return {
        ...state,
        password: action.password,
      };
    }
    case REG_PASSWORD_AGAIN_INPUT: {
      return {
        ...state,
        passwordAgain: action.passwordAgain,
      };
    }
    default: {
      return state;
    }
  }
};
