export const deepCopy = (state) => {
  const newState = state.constructor();

  for (let i in state) {
    if (state[i] instanceof Object && !(state[i] instanceof Function)) {
      newState[i] = deepCopy(state[i]);
      continue;
    }

    newState[i] = state[i];
  }

  return newState;
};
