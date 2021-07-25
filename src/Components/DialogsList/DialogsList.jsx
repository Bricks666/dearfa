import Dialog from "../Dialog/Dialog";

import DialogsListStyle from "./DialogsList.module.css";

function DialogsList(props) {
  return (
    <ul className={`${props.className ?? ""} ${DialogsListStyle.dialogsList}`}>
      <Dialog className={DialogsListStyle.dialog} isCurrent />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
      <Dialog className={DialogsListStyle.dialog} />
    </ul>
  );
}

export default DialogsList;
