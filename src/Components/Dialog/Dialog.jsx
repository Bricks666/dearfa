import SubsectionHeader from "../SubsectionHeader/SubsectionHeader";
import Picture from "../Picture/Picture";

import DialogStyle from "./Dialog.module.css";

function Dialog(props) {
  return (
    <li
      className={`${props.className} ${DialogStyle.dialog} ${
        props.isCurrent ? DialogStyle.dialog_current : ""
      }`}
    >
      <SubsectionHeader className={`${DialogStyle.fullName}`}>
        Василий Абрамов
      </SubsectionHeader>
      <Picture
        className={`${DialogStyle.photo} fake-photo`}
        oneXSrc=""
        twoXSrc=""
        alt="Аватарка собеседника"
      />
    </li>
  );
}

export default Dialog;
