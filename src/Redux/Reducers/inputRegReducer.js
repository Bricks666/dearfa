import { INPUT_REG } from "../Constants";

export const inputRegReducer = (state, action) => {
  if (action.type === INPUT_REG) {
    const newState = Object.assign([], state);

    const targetField = newState.find((el) => el.content === action.name);

    targetField.value = action.value;

    return newState;
  }

  return state;
};
