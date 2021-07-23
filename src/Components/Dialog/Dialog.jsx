import DialogStyle from "./Dialog.module.css";

import Picture from "../Picture/Picture";

function Dialog(props) {
  return (
    <button
      className={`${DialogStyle.dialog} ${
        props.isCurrent === "true" ? DialogStyle.dialog_current : ""
      }`}
    >
      <h3 className={DialogStyle.fullName}>Василий Абрамов</h3>
      <Picture
        className={`${DialogStyle.photo} fake-photo`}
        oneXUrl=""
        twoXUrl=""
        alt="Аватарка собеседника"
      />
    </button>
  );
}

export default Dialog;
