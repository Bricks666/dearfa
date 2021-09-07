import { addMessageActionCreator } from "./ActionCreators/addMessage";
import { inputMessageActionCreator } from "./ActionCreators/inputMessage";

import { addPostActionCreator } from "./ActionCreators/addPost";
import { inputPostActionCreator } from "./ActionCreators/inputPost";

import { toggleLikeActionCreator } from "./ActionCreators/toggleLike";

import { inputFormActionCreator } from "./ActionCreators/inputForm";

import { unfollowUserActionCreator } from "./ActionCreators/unfollowUser";
import { followUserActionCreator } from "./ActionCreators/followUser";

import { setUsersActionCreator } from "./ActionCreators/setUsers";

export const mapDispatchToProps = (componentName) => {
  switch (componentName) {
    case "MakeMessage": {
      return (dispatch) => {
        return {
          add() {
            dispatch(addMessageActionCreator());
          },
          input(text) {
            dispatch(inputMessageActionCreator(text));
          },
        };
      };
    }
    case "MakePost": {
      return (dispatch) => {
        return {
          add() {
            dispatch(addPostActionCreator());
          },
          input(text) {
            dispatch(inputPostActionCreator(text));
          },
        };
      };
    }
    case "Like": {
      return (dispatch) => {
        return {
          toggle(id) {
            dispatch(toggleLikeActionCreator(id));
          },
        };
      };
    }
    case "Checkbox":
    case "StandardField": {
      return (dispatch) => {
        return {
          inputField(type, id, text) {
            dispatch(inputFormActionCreator(type, id, text));
          },
        };
      };
    }
    case "FriendsList": {
      return (dispatch) => {
        return {
          setUsers(users) {
            dispatch(setUsersActionCreator(users));
          },
        };
      };
    }
    case "FriendsListItem": {
      return (dispatch) => {
        return {
          unfollowUser(id) {
            dispatch(unfollowUserActionCreator(id));
          },
        };
      };
    }
    case "UsersListItem": {
      return (dispatch) => {
        return {
          unfollowUser(id) {
            dispatch(unfollowUserActionCreator(id));
          },
          followUser(id) {
            dispatch(followUserActionCreator(id));
          },
        };
      };
    }
    case "MoreUsers": {
      return (dispatch) => {
        return {
          onClick(users) {
            dispatch(setUsersActionCreator(users));
          },
        };
      };
    }
    case "UsersList": {
      return (dispatch) => {
        return {
          setUsers(users) {
            dispatch(setUsersActionCreator(users));
          },
        };
      };
    }
    default: {
      return (dispatch) => {
        return {};
      };
    }
  }
};
