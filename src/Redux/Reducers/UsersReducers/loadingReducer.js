import { START_LOADING, STOP_LOADING } from "../../Actions/Constants";

export const loadingReducer = (state, action) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, isLoading: true };
    }
    case STOP_LOADING: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
