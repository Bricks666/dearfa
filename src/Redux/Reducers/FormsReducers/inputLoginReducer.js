import { INPUT_LOGIN } from "../../Constants";


export const inputLoginReducer = (state, action) => {
  if (action.type === INPUT_LOGIN) {
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
