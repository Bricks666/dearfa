import FormFieldStyle from "./FormField.module.css";

export function FormField(props) {
    return (
        <label className={`${props.className ?? ""} ${FormFieldStyle.label}`}>
            {props.children}
            <input
                className={FormFieldStyle.field}
                type={props.type}
                required={props.required}
                autoComplete={props.autoComplete?.toString()}
            />
        </label>
    );
}
