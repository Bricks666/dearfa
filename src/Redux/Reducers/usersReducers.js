import { initialState } from "../initialState";
import {
  ADD_USERS,
  FOLLOW_USER,
  NEXT_USERS_PAGE,
  START_FOLLOWING_USER,
  START_LOADING_USERS,
  END_FOLLOWING_USER,
  END_LOADING_USERS,
  UNFOLLOW_USER,
} from "../ActionsConstants";

export const usersReducers = (state = initialState.users, action) => {

  switch (action.type) {
    case FOLLOW_USER: {

      return {
        ...state,
        list: state.list.map((user) => {
          if (user.id === action.user.id) {
            return { ...user, followed: true };
          }

          return user;
        }),
      };
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        list: state.list.map((friend) => {
          if (friend.id === action.id) {
            return { ...friend, followed: false };
          }

          return friend;
        }),
      };
    }
    case START_LOADING_USERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case END_LOADING_USERS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case NEXT_USERS_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
        list: action.users,
      };
    }
    case ADD_USERS: {
      return {
        ...state,
        list: action.data.items,
        totalUsers: action.data.totalCount,
        pageCount: Math.ceil(action.data.totalCount / state.usersCount),
      };
    }
    case START_FOLLOWING_USER: {
      return {
        ...state,
        list: state.list.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              isFollowing: true,
            };
          }

          return user;
        }),
      };
    }
    case END_FOLLOWING_USER: {
      return {
        ...state,
        list: state.list.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              isFollowing: false,
            };
          }

          return user;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
