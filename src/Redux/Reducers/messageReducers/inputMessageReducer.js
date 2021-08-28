import { INPUT_MESSAGE } from "../../Constants";

export const inputMessageReducer = (state, action) => {
  if (action.type === INPUT_MESSAGE) {
    const newState = Object.assign([], state);

    if (newState[0].newMessageContent === undefined) {
      newState[0].newMessageContent = {};
    }

    newState[0].newMessageContent.text = action.text;

    return newState;
  }

  return state;
};
