import { AUTH, SET_ME } from "../ActionsConstants";
import { initialState } from "../initialState";

export const authReducers = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    }
    case SET_ME: {
      return {
        ...state,
        ...action.me,
        isLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};
