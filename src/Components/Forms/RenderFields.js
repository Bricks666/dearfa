import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, stateFields, dispatch, className) => {
  return fields.map((field) => {
    const printWord = (evt) => {
      evt.preventDefault();

      dispatch({
        type: "PRINT-WORD",
        value: evt.target.value,
        fieldName: field.content,
      });
    };
    return (
      <FormField
        className={className}
        type={field.type}
        required={field.required}
        value={stateFields.get(field.content)?.value}
        onChange={printWord}
        autoComplete={field.autoComplete}
      >
        {field.content}
      </FormField>
    );
  });
};
