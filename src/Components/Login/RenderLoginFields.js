import { INPUT_LOGIN } from "../../Redux/Actions/Constants";
import { renderField } from "../Shared/Fields/RenderField";

export const renderLoginFields = (fields, classNames) => {
  return fields.map((field) => renderField(field, classNames, INPUT_LOGIN));
};
