import CheckboxStyle from "./Checkbox.module.css";

export function Checkbox(props) {
    return (
        <div className={`${props.className}`}>
            <input
                className={CheckboxStyle.input}
                type="checkbox"
                id="checkbox"
            />
            <label className={CheckboxStyle.label} htmlFor="checkbox">
                {props.children}
            </label>
        </div>
    );
}
