import React from "react";
import Dialog from "../Dialogs/Dialog/Dialog";

import DialogsListStyle from "./DialogsList.module.css";

function DialogsList(props) {
  return (
    <ul className={`${props.className ?? ""} ${DialogsListStyle.dialogsList}`}>
      <Dialog className={DialogsListStyle.dialog} to="/dialogs/1" who="Афыф"/>
      <Dialog className={DialogsListStyle.dialog} to="/dialogs/2" who="фвы"/>
      <Dialog className={DialogsListStyle.dialog} to="/dialogs/3" who="фывфыв"/>
      <Dialog className={DialogsListStyle.dialog} to="/dialogs/4" who="фвыав"/>
      <Dialog className={DialogsListStyle.dialog} to="/dialogs/5" who="фва"/>
    </ul>
  );
}

export default DialogsList;
