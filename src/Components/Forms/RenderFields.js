import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, enterWords, valueFields, className) => {
  return fields.map((field) => {
    const printWord = (evt) => {
      evt.preventDefault();

      enterWords(evt.target.value, field.content);
    };
    return (
      <FormField
        className={className}
        type={field.type}
        required={field.required}
        value={valueFields.get(field.content)?.value}
        onChange={printWord}
        autoComplete={field.autoComplete}
      >
        {field.content}
      </FormField>
    );
  });
};
