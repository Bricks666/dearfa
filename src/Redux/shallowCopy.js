export const shallowCopy = (state) => {
  const newState = state.constructor();

  for (let key in state) {
    newState[key] = state[key];
  }

  return newState;
};
