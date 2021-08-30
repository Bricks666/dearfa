import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, actionType, className) => {
  return fields.map((field) => {
    return (
      <FormField className={className} fieldInfo={field} type={actionType} />
    );
  });
};
