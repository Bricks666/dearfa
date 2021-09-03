import { INPUT_REG } from "../../Redux/Constants";
import { renderField } from "../Shared/Fields/RenderField";

export const renderRegFields = (fields, classNames) => {
  return fields.map((field) => renderField(field, classNames, INPUT_REG));
};
