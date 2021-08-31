import { addMessageActionCreator } from "./ActionCreators/addMessage";
import { inputMessageActionCreator } from "./ActionCreators/inputMessage";

import { addPostActionCreator } from "./ActionCreators/addPost";
import { inputPostActionCreator } from "./ActionCreators/inputPost";

import { toggleLikeActionCreator } from "./ActionCreators/toggleLike";

import { inputFormActionCreator } from "./ActionCreators/inputForm";
import { INPUT_LOGIN } from "./Constants";

import { removeFriendActionCreator } from "./ActionCreators/removeFriend";

export const mapDispatchToProps = (componentName) => {
  switch (componentName) {
    case "MakeMessage":
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
    case "MakePost":
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
    case "Like":
      return (dispatch) => {
        return {
          toggle(id) {
            dispatch(toggleLikeActionCreator(id));
          },
        };
      };
    case "Checkbox":
      return (dispatch) => {
        return {
          onChange(name, isChecked) {
            dispatch(inputFormActionCreator(INPUT_LOGIN, name, isChecked));
          },
        };
      };
    case "StandardField":
      return (dispatch) => {
        return {
          inputField(type, name, text) {
            dispatch(inputFormActionCreator(type, name, text));
          },
        };
      };
    case "FriendsListItem":
      return (dispatch) => {
        return {
          removeFriend(id) {
            dispatch(removeFriendActionCreator(id));
          },
        };
      };
    default:
      return (dispatch) => {
        return {};
      };
  }
};
