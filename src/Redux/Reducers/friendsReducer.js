import {
  FOLLOW_USER,
  NEXT_FRIENDS_PAGE,
  SET_FRIENDS,
  START_LOADING_FRIENDS,
  STOP_LOADING_FRIENDS,
  UNFOLLOW_USER,
} from "../Actions/Constants";
import { initialState } from "../initialState";

export const friendsReducer = (state = initialState.friends, action) => {
  switch (action.type) {
    case SET_FRIENDS: {
      return {
        ...state,
        list: action.data.items,
        totalCount: action.data.totalCount,
        pageCount: Math.ceil(action.data.totalCount / state.friendsCount),
      };
    }
    case START_LOADING_FRIENDS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case STOP_LOADING_FRIENDS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case NEXT_FRIENDS_PAGE: {
      return {
        ...state,
        currentPage: action.page,
        list: action.friends,
      };
    }
    case FOLLOW_USER: {
      return {
        ...state,
        list: [...state.list, { ...action.user, followed: true }],
      };
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        list: state.list.filter((friend) => friend.id !== action.id),
      };
    }
    default:
      return state;
  }
};
