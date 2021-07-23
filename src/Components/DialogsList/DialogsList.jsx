import Dialog from "../Dialog/Dialog";
import Picture from "../Picture/Picture";

import DialogsListStyle from "./DialogsList.module.css";

function DialogsList(props) {
  return (
    <ul className={`${props.className} ${DialogsListStyle.dialogsList}`}>
      <li className={DialogsListStyle.dialog}>
        <Dialog isCurrent="true" />
      </li>
      <li className={DialogsListStyle.dialog}>
        <Dialog />
      </li>
      <li className={DialogsListStyle.dialog}>
        <Dialog />
      </li>
      <li className={DialogsListStyle.dialog}>
        <Dialog />
      </li>
      <li className={DialogsListStyle.dialog}>
        <Dialog />
      </li>
    </ul>
  );
}

export default DialogsList;