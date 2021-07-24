import DialogStyle from "./Dialog.module.css";

import Picture from "../Picture/Picture";
import SubsectionHeader from "../SubsectionHeader/SubsectionHeader";

function Dialog(props) {
  return (
    <button
      className={`${DialogStyle.dialog} ${
        props.isCurrent? DialogStyle.dialog_current : ""
      }`}
    >
      <SubsectionHeader
        className={`${DialogStyle.fullName}`}
        content="Василий Абрамов"
      />
      <Picture
        className={`${DialogStyle.photo} fake-photo`}
        oneXSrc=""
        twoXSrc=""
        alt="Аватарка собеседника"
      />
    </button>
  );
}

export default Dialog;
