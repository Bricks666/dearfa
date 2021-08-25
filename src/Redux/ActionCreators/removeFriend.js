import { REMOVE_FRIEND } from "../Constants";

export const removeFriendActionCreator = (id) => {
  return {
    type: REMOVE_FRIEND,
    friendId: id,
  };
};
