import {
  FOLLOW_USER,
  NEXT_FRIENDS_PAGE,
  SET_FRIENDS,
  START_FOLLOWING_FRIENDS,
  START_LOADING_FRIENDS,
  END_FOLLOWING_FRIENDS,
  END_LOADING_FRIENDS,
  UNFOLLOW_USER,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const friendsReducer = (state = initialState.friends, action) => {
  switch (action.type) {
    case SET_FRIENDS: {
      return {
        ...state,
        list: action.data.items,
        totalCount: action.data.totalCount,
        pageCount: Math.ceil(action.data.totalCount / state.friendsCount),
        isLoaded: true,
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
      return state.isLoaded
        ? {
            ...state,
            list: [...state.list, { ...action.user, followed: true }],
            totalCount: ++state.totalCount,
            pageCount: Math.ceil(state.totalCount / state.friendsCount),
          }
        : state;
    }
    case UNFOLLOW_USER: {
      return state.isLoaded
        ? {
            ...state,
            list: state.list.filter((friend) => friend.id !== action.id),
            totalCount: --state.totalCount,
            pageCount: Math.ceil(state.totalCount / state.friendsCount),
          }
        : state;
    }
    default:
      return state;
  }
};
