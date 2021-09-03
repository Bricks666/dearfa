import { StandardFieldContainer } from "./StandardField/StandardFieldContainer";
import { Button } from "../Buttons/Button/Button";
import { CheckboxContainer } from "./Checkbox/CheckboxContainer";

export const renderField = (field, className, actionType) => {
  switch (field.type) {
    case "checkbox": {
      return (
        <CheckboxContainer field={field} type={actionType} key={field.id} />
      );
    }
    case "button": {
      return (
        <Button className={className?.button} key={field.id}>
          {field.content}
        </Button>
      );
    }
    default: {
      return (
        <StandardFieldContainer
          className={className?.standard}
          field={field}
          type={actionType}
          key={field.id}
        />
      );
    }
  }
};
