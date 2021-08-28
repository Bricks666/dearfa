import { Button } from "../../Buttons/Button";
import { Checkbox } from "../Checkbox/Checkbox";

import FormFieldStyle from "./FormField.module.css";

export function FormField(props) {
    const onChange = (evt) => {
        evt.preventDefault();

        const action = props.actionCreator(props.children, evt.target.value);

        return props.dispatch(action);
    };
    let field;
    switch (props.type) {
        case "checkbox":
            field = (
                <Checkbox value={props.value} dispatch={props.dispatch}>
                    {props.children}
                </Checkbox>
            );
            break;
        case "button":
            field = (
                <Button className={FormFieldStyle.button}>
                    {props.children}
                </Button>
            );
            break;
        default:
            field = (
                <label
                    className={`${props.className ?? ""} ${
                        FormFieldStyle.label
                    }`}
                >
                    {props.children}
                    <input
                        className={FormFieldStyle.field}
                        type={props.type}
                        required={props.required}
                        value={props.value ?? ""}
                        onChange={onChange}
                        autoComplete={props.autoComplete?.toString()}
                    />
                </label>
            );
            break;
    }
    return field;
}
