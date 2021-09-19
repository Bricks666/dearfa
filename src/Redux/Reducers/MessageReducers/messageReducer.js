import { ADD_MESSAGE } from "../../Actions/Constants";

const createMessage = (id, content) => {
  return {
    authorId: 1,
    content,
    id,
  };
};

export const messageReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    const newState = [...state];

    const value = { ...newState[0].newMessageContent };

    if (Boolean(value) === false || Boolean(value.text) === false) {
      return state;
    }

    const newMessage = createMessage(newState[0].messages.length + 1, value);

    newState[0] = {
      ...state[0],
      messages: [...state[0].messages, newMessage],
      newMessageContent: null,
    };

    return newState;
  }

  return state;
};
