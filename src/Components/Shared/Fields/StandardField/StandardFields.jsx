import StandardFieldStyle from "./StandardField.module.css";

export const StandardField = (props) => {
  const onChange = (evt) => {
    evt.preventDefault();

    props.inputField(props.type, props.field.id, evt.target.value);
  };

  return (
    <label className={`${props.className ?? ""} ${StandardFieldStyle.label}`}>
      {props.field.content}
      <input
        className={StandardFieldStyle.field}
        type={props.field.type}
        required={props.field.required}
        value={props.field.value ?? ""}
        onChange={onChange}
        autoComplete={props.field.autoComplete.toString()}
      />
    </label>
  );
};
