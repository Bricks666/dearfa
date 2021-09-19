import { START_LOADING_USERS, STOP_LOADING_USERS } from "../../Actions/Constants";

export const loadingReducer = (state, action) => {
  switch (action.type) {
    case START_LOADING_USERS: {
      return { ...state, isLoading: true };
    }
    case STOP_LOADING_USERS: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
