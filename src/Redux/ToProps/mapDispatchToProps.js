import {
  LIKE,
  MAKE_MESSAGE,
  CHECKBOX,
  STANDARD_FIELD,
  FRIENDS_LIST,
  FRIENDS_LIST_ITEM,
  PAGES_LIST,
  USERS_LIST,
  USERS_LIST_ITEM,
  MAKE_POST,
  PROFILE,
  HEADER,
  ME,
} from "./componentsConstants";

import { setAuth } from "../Actions/Auth/setAuth";
import { startLoadingAuth } from "../Actions/Auth/startLoadingAuth";
import { stopLoadingAuth } from "../Actions/Auth/stopLoadingAuth";
import { setMe } from "../Actions/Me/setMe";
import { startLoadingMe } from "../Actions/Me/startLoadingMe";
import { stopLoadingMe } from "../Actions/Me/stopLoadingMe";

import { setUserInfo } from "../Actions/Profile/setUserInfo";
import { startLoadingProfile } from "../Actions/Profile/startLoadingProfile";
import { stopLoadingProfile } from "../Actions/Profile/stopLoadingProfile";

import { addMessageActionCreator } from "../Actions/addMessage";
import { inputMessageActionCreator } from "../Actions/inputMessage";

import { addPostActionCreator } from "../Actions/addPost";
import { inputPostActionCreator } from "../Actions/inputPost";

import { toggleLikeActionCreator } from "../Actions/toggleLike";

import { inputFormActionCreator } from "../Actions/inputForm";

import { unfollowUserActionCreator } from "../Actions/Users/unfollowUser";
import { followUserActionCreator } from "../Actions/Users/followUser";

import { nextPage } from "../Actions/Users/nextPage";
import { addUsers } from "../Actions/Users/addUsers";

import { startLoadingUsers } from "../Actions/Users/startLoadingUsers";
import { stopLoadingUsers } from "../Actions/Users/stopLoadingUsers";

export const mapDispatchToProps = (componentName) => {
  switch (componentName) {
    case HEADER: {
      return {
        auth: setAuth,
        startLoadingAuth,
        stopLoadingAuth,
      };
    }
    case ME: {
      return {
        setMe,
        startLoadingMe,
        stopLoadingMe,
      };
    }
    case PROFILE: {
      return {
        setUser: setUserInfo,
        startLoadingProfile,
        stopLoadingProfile,
      };
    }
    case MAKE_MESSAGE: {
      return {
        add: addMessageActionCreator,
        input: inputMessageActionCreator,
      };
    }
    case MAKE_POST: {
      return {
        add: addPostActionCreator,
        input: inputPostActionCreator,
      };
    }
    case LIKE: {
      return {
        toggle: toggleLikeActionCreator,
      };
    }
    case CHECKBOX:
    case STANDARD_FIELD: {
      return {
        inputField: inputFormActionCreator,
      };
    }
    case FRIENDS_LIST: {
      return {
        addUsers,
      };
    }
    case FRIENDS_LIST_ITEM: {
      return {
        unfollow: unfollowUserActionCreator,
      };
    }
    case PAGES_LIST: {
      return {
        nextPage,
        startLoadingUsers,
        stopLoadingUsers,
      };
    }
    case USERS_LIST: {
      return {
        addUsers,
        startLoadingUsers,
        stopLoadingUsers,
      };
    }
    case USERS_LIST_ITEM: {
      return {
        unfollow: unfollowUserActionCreator,
        follow: followUserActionCreator,
      };
    }
    default: {
      return {};
    }
  }
};
