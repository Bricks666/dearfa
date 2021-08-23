import { rerenderEntireTree } from "../../rerenderEntireTree";

function getField(fieldName) {
  if (this.valueFields.has(fieldName) === false) {
    this.valueFields.set(fieldName, { value: "" });
  }

  return this.valueFields.get(fieldName);
}

export function enterWords(data, value, fieldName) {
  const state = Object.assign({}, getField.bind(this)(fieldName));

  state.value = value;

  this.valueFields.set(fieldName, state);

  rerenderEntireTree(data);
}
