import StandardFieldStyle from "./StandardField.module.css";

export const StandardField = (props) => {
  const onChange = (evt) => {
    evt.preventDefault();

    props.inputField(props.type, props.fieldInfo.id, evt.target.value);
  };

  return (
    <label className={`${props.className ?? ""} ${StandardFieldStyle.label}`}>
      {props.fieldInfo.content}
      <input
        className={StandardFieldStyle.field}
        type={props.fieldInfo.type}
        required={props.fieldInfo.required}
        value={props.fieldInfo.value ?? ""}
        onChange={onChange}
        autoComplete={props.fieldInfo.autoComplete.toString()}
      />
    </label>
  );
};
