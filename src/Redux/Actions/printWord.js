import { PRINT_WORD } from "../../Actions/Constants";


export const printWordActionCreator = (value, fieldName) => {
  return {
    type: PRINT_WORD,
    value,
    fieldName,
  };
};
