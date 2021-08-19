import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, className) => {
  return fields.map((field) => {
    return (
      <FormField
        className={className}
        type={field.type}
        required={field.required}
        autoComplete={field.autoComplete}
      >
        {field.content}
      </FormField>
    );
  });
};
