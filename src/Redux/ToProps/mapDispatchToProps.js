import {
  LIKE,
  MAKE_MESSAGE,
  FRIENDS_LIST,
  FRIENDS_LIST_ITEM,
  USERS_PAGES_LIST,
  USERS_LIST,
  USERS_LIST_ITEM,
  MAKE_POST,
  PROFILE,
  HEADER,
  ME,
  FAVORITE_FRIENDS,
  LOGIN_BUTTON,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
  LOGIN_CHECKBOX,
  REG_EMAIL,
  REG_PASSWORD,
  REG_PASSWORD_AGAIN,
  REG_FULLNAME,
  REG_BUTTON,
} from "./componentsConstants";

import { setAuth } from "../Actions/Auth/setAuth";
import { startLoadingAuth } from "../Actions/Auth/startLoadingAuth";
import { endLoadingAuth } from "../Actions/Auth/endLoadingAuth";
import { setMe } from "../Actions/Me/setMe";
import { startLoadingMe } from "../Actions/Me/startLoadingMe";
import { endLoadingMe } from "../Actions/Me/endLoadingMe";

import { loginEmailInput } from "../Actions/Login/loginEmailInput";
import { loginPasswordInput } from "../Actions/Login/loginPasswordInput";
import { loginCheckboxToggle } from "../Actions/Login/loginCheckboxToggle";

import { regEmailInput } from "../Actions/Registration/regEmailInput";
import { regPasswordInput } from "../Actions/Registration/regPasswordInput";
import { regPasswordAgainInput } from "../Actions/Registration/regPasswordAgainInput";
import { regFullNameInput } from "../Actions/Registration/regFullNameInput";

import { setFriends } from "../Actions/Friends/setFriends";

import { setUserInfo } from "../Actions/Profile/setUserInfo";
import { startLoadingProfile } from "../Actions/Profile/startLoadingProfile";
import { endLoadingProfile } from "../Actions/Profile/endLoadingProfile";

import { addMessageActionCreator } from "../Actions/Dialogs/addMessage";
import { inputMessageActionCreator } from "../Actions/Dialogs/inputMessage";

import { addPostActionCreator } from "../Actions/Posts/addPost";
import { inputPostActionCreator } from "../Actions/Posts/inputPost";

import { toggleLikeActionCreator } from "../Actions/Posts/toggleLike";

import { unfollowUserActionCreator } from "../Actions/Users/unfollowUser";
import { followUserActionCreator } from "../Actions/Users/followUser";

import { nextUsersPage } from "../Actions/Users/nextUsersPage";
import { addUsers } from "../Actions/Users/addUsers";

import { startLoadingUsers } from "../Actions/Users/startLoadingUsers";
import { endLoadingUsers } from "../Actions/Users/endLoadingUsers";

import { startLoadingFriends } from "../Actions/Friends/startLoadingFrineds";
import { endLoadingFriends } from "../Actions/Friends/endLoadingFriends";
import { setFavoriteFriends } from "../Actions/FavoriteFriends/setFavoriteFriends";
import { endLoadingFavoriteFriends } from "../Actions/FavoriteFriends/endLoadingFavoriteFriends";
import { startLoadingFavoriteFriends } from "../Actions/FavoriteFriends/startLoadingFavoriteFriends";
import { endFollowingFriends } from "../Actions/Friends/endFollowingFollowing";
import { startFollowingFriends } from "../Actions/Friends/startFollowingFriends";
import { endFollowingUser } from "../Actions/Users/endFollowingUser";
import { startFollowingUser } from "../Actions/Users/startFollowingUser";

export const mapDispatchToProps = (componentName) => {
  switch (componentName) {
    case HEADER: {
      return {
        auth: setAuth,
        startLoadingAuth,
        endLoadingAuth,
      };
    }
    case ME: {
      return {
        setMe,
        startLoadingMe,
        endLoadingMe,
      };
    }
    case LOGIN_BUTTON: {
      return () => {
        return {
          onClick(evt) {
            evt.preventDefault();
            console.log("click");
          },
        };
      };
    }
    case LOGIN_EMAIL: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(loginEmailInput(evt.target.value));
          },
        };
      };
    }
    case LOGIN_PASSWORD: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(loginPasswordInput(evt.target.value));
          },
        };
      };
    }
    case LOGIN_CHECKBOX: {
      return {
        toggle: loginCheckboxToggle,
      };
    }
    case REG_EMAIL: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(regEmailInput(evt.target.value));
          },
        };
      };
    }
    case REG_PASSWORD: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(regPasswordInput(evt.target.value));
          },
        };
      };
    }
    case REG_PASSWORD_AGAIN: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(regPasswordAgainInput(evt.target.value));
          },
        };
      };
    }
    case REG_FULLNAME: {
      return (dispatch) => {
        return {
          input(evt) {
            dispatch(regFullNameInput(evt.target.value));
          },
        };
      };
    }
    case REG_BUTTON: {
      return () => {
        return {
          onClick(evt) {
            evt.preventDefault();
            console.log("another click");
          },
        };
      };
    }
    case PROFILE: {
      return {
        setUser: setUserInfo,
        startLoadingProfile,
        endLoadingProfile,
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
    case FAVORITE_FRIENDS: {
      return {
        startLoadingFavoriteFriends: startLoadingFavoriteFriends,
        endLoadingFavoriteFriends: endLoadingFavoriteFriends,
        setFavoriteFriends: setFavoriteFriends,
      };
    }
    case FRIENDS_LIST: {
      return {
        startLoadingFriends: startLoadingFriends,
        endLoadingFriends: endLoadingFriends,
        setFriends: setFriends,
      };
    }
    case FRIENDS_LIST_ITEM: {
      return {
        startFollowing: startFollowingFriends,
        endFollowing: endFollowingFriends,
        unfollow: unfollowUserActionCreator,
      };
    }
    case USERS_PAGES_LIST: {
      return {
        nextPage: nextUsersPage,
        startLoadingUsers,
        endLoadingUsers,
      };
    }
    case USERS_LIST: {
      return {
        addUsers,
        startLoadingUsers,
        endLoadingUsers,
      };
    }
    case USERS_LIST_ITEM: {
      return {
        unfollow: unfollowUserActionCreator,
        follow: followUserActionCreator,
        endFollowing: endFollowingUser,
        startFollowing: startFollowingUser,
      };
    }
    default: {
      return {};
    }
  }
};
