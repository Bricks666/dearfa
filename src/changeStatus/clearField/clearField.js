export function clearField(valueFields, fieldName) {
  const state = Object.assign({}, valueFields.get(fieldName));

  state.value = "";

  valueFields.set(fieldName, state);
}
