import {
  AUTH,
  START_LOADING_AUTH,
  STOP_LOADING_AUTH,
  SET_ME,
  START_LOADING_ME,
  STOP_LOADING_ME,
} from "../Actions/Constants";
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
    case START_LOADING_AUTH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case STOP_LOADING_AUTH: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_ME: {
      return {
        ...state,
        ...action.me,
        isLoaded: true,
      };
    }
    case START_LOADING_ME: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case STOP_LOADING_ME: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
