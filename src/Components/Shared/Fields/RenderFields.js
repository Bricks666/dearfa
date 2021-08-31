import { StandardFieldContainer } from "./StandardField/StandardFieldContainer";
import { Button } from "../Buttons/Button/Button";
import { CheckboxContainer } from "./Checkbox/CheckboxContainer";

export const RenderFields = (fields, actionType, className) => {
  return fields.map((field) => {
    switch (field.type) {
      case "checkbox": {
        return <CheckboxContainer field={field} key={field.id} />;
      }
      case "button": {
        return <Button key={field.id}>{field.content}</Button>;
      }
      default: {
        return (
          <StandardFieldContainer
            className={className}
            field={field}
            type={actionType}
            key={field.id}
          />
        );
      }
    }
  });
};
