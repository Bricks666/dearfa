import { Button } from "../../Buttons/Button";
import { CheckboxContainer } from "../Checkbox/CheckboxContainer";
import { StandardFieldContainer } from "../StandardField/StandardFieldContainer";

export function FormField(props) {
    let field;

    switch (props.fieldInfo.type) {
        case "checkbox":
            field = (
                <CheckboxContainer
                    value={props.fieldInfo.value}
                    dispatch={props.dispatch}
                >
                    {props.fieldInfo.content}
                </CheckboxContainer>
            );
            break;
        case "button":
            field = <Button>{props.fieldInfo.content}</Button>;
            break;
        default:
            field = (
                <StandardFieldContainer
                    className={props.className}
                    fieldInfo={props.fieldInfo}
                    actionCreator={props.actionCreator}
                    dispatch={props.dispatch}
                />
            );
            break;
    }

    return field;
}
