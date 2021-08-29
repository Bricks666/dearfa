import { FormField } from "./FormField/FormField";

export const RenderFields = (fields, dispatch, actionCreator, className) => {

  return fields.map((field) => {
    return (
      <FormField
        className={className}
        fieldInfo={field}
        dispatch={dispatch}
        actionCreator={actionCreator}
      />
    );
  });
};
