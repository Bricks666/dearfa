import {
  SET_USER_INFO,
  START_LOADING_PROFILE,
  STOP_LOADING_PROFILE,
} from "../Actions/Constants";
import { initialState } from "../initialState";

export const profileReducers = (state = initialState.profile, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return { ...state, ...action.info };
    }
    case START_LOADING_PROFILE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case STOP_LOADING_PROFILE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
