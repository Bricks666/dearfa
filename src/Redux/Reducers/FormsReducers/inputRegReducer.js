import { INPUT_REG } from "../../Constants";


export const inputRegReducer = (state, action) => {
  if (action.type === INPUT_REG) {
    debugger;
    const newState = state.map((el) => {
      if (el.id === action.id) {
        return { ...el, value: action.text };
      }

      return el;
    });

    return newState;
  }

  return state;
};
