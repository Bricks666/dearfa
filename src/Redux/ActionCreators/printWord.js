import { PRINT_WORD } from "../../Constants"; import { deepCopy } from "../../deepCopy";


export const printWordActionCreator = (value, fieldName) => {
  return {
    type: PRINT_WORD,
    value,
    fieldName,
  };
};
