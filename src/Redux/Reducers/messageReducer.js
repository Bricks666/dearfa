/* CREATE MESSAGE */

import { ADD_MESSAGE } from "../Constants";

const createMessage = (id, content) => {
  return {
    authorId: 1,
    content,
    id,
  };
};

export const messageReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    const newState = Object.assign([], state);
    const value = newState[0].newMessageContent;

    if (newState[0].messages === undefined) {
      newState[0].messages = [];
    }

    const newMessage = createMessage(newState[0].messages.length + 1, value);

    newState[0].messages.push(newMessage);

    newState[0].newMessageContent = {};

    return newState;
  }
  return state;
};
