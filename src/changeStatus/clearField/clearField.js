export function clearField(data, fieldName) {
  const state = Object.assign({}, data.valueFields.get(fieldName));
  state.value = state.newValue = "";
  data.valueFields.set(fieldName, state);
}
