import {
  SET_USER_INFO,
  START_LOADING_PROFILE,
  END_LOADING_PROFILE,
} from "../ActionsConstants";
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
    case END_LOADING_PROFILE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
