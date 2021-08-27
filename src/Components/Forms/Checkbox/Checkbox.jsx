import { inputLoginActionCreator } from "../../../Redux/ActionCreators/inputLoginActionCreator";
import CheckboxStyle from "./Checkbox.module.css";

export function Checkbox(props) {
    const onChange = (evt) => {
        evt.preventDefault();

        console.log(evt.target.checked, Date.now());

        const action = inputLoginActionCreator(
            evt.target.checked,
            props.children
        );

        return props.dispatch(action);
    };

    return (
        <div className={`${props.className ?? ""}`}>
            <input
                className={CheckboxStyle.input}
                type="checkbox"
                id="checkbox"
                checked={props.value}
                onChange={onChange}
            />
            {console.log("render checkbox", Date.now())}
            <label className={CheckboxStyle.label} htmlFor="checkbox">
                {props.children}
            </label>
        </div>
    );
}
