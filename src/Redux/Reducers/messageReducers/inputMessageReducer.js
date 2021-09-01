import { INPUT_MESSAGE } from "../../Constants";


export const inputMessageReducer = (state, action) => {
  if (action.type === INPUT_MESSAGE) {

    const newState = [...state];
    newState[0] = {
      ...state[0],
      newMessageContent: {
        ...state[0].newMessageContent,
      },
    };

    if (newState[0].newMessageContent === undefined) {
      newState[0].newMessageContent = {};
    }

    newState[0].newMessageContent.text = action.text;

    return newState;
  }

  return state;
};
