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
    case START_LOADING_FRIENDS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case END_LOADING_FRIENDS: {
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
      return state.isLoaded
        ? {
            ...state,
            list: [...state.list, { ...action.user, followed: true }],
            totalCount: ++state.totalCount,
          }
        : state;
    }
    case UNFOLLOW_USER: {
      return state.isLoaded
        ? {
            ...state,
            list: state.list.filter((friend) => friend.id !== action.id),
          }
        : state;
    }
    case START_FOLLOWING_FRIENDS: {
      return {
        ...state,
        list: state.list.map((friend) => {
          if (friend.id === action.friendId) {
            return {
              ...friend,
              isFollowing: true,
            };
          }

          return friend;
        }),
      };
    }
    case END_FOLLOWING_FRIENDS: {
      return {
        ...state,
        list: state.list.map((friend) => {
          if (friend.id === action.friendId) {
            return {
              ...friend,
              isFollowing: false,
            };
          }

          return friend;
        }),
      };
    }
    default:
      return state;
  }
};
