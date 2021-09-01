import CheckboxStyle from "./Checkbox.module.css";

export function Checkbox(props) {
  const toggle = (evt) => {
    evt.preventDefault();

    props.inputField(props.type, props.field.id, evt.target.checked);
  };

  return (
    <div className={`${props.className ?? ""}`}>
      <input
        className={CheckboxStyle.input}
        type="checkbox"
        id="checkbox"
        checked={props.field.value}
        onChange={toggle}
      />
      <label className={CheckboxStyle.label} htmlFor="checkbox">
        {props.field.content}
      </label>
    </div>
  );
}
