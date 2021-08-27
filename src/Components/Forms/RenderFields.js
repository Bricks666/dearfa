import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, dispatch, actionCreator, className) => {
  return fields.map((field) => {
    return (
      <FormField
        className={className}
        type={field.type}
        required={field.required}
        value={field.value}
        autoComplete={field.autoComplete}
        dispatch={dispatch}
        actionCreator={actionCreator}
      >
        {field.content}
      </FormField>
    );
  });
};
