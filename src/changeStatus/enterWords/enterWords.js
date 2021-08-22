import { rerenderEntireTree } from "../../rerenderEntireTree";

function getField(fieldName) {
  if (this.valueFields.has(fieldName) === false) {
    this.valueFields.set(fieldName, { newValue: "", value: "" });
  }

  return this.valueFields.get(fieldName);
}

export function enterWords(data, field, fieldName) {
  const value = field.value;

  const state = Object.assign({}, getField.bind(this)(fieldName));

  field.value = state.value;

  state.newValue = value;

  state.value = state.newValue;

  this.valueFields.set(fieldName, state);

  rerenderEntireTree(data);
}
