import React from "react";
import { Switch, Route } from "react-router";
import Chat from "../Chat/Chat";
import DialogsList from "../DialogsList/DialogsList";
import SectionHeader from "../SectionHeader/SectionHeader";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <main className={`${props.className ?? ""} ${DialogsStyle.dialogs}`}>
      <SectionHeader className={DialogsStyle.heading}>Диалоги</SectionHeader>
      <DialogsList className={DialogsStyle.dialogsList} />
      <Switch>
        <Route path="/dialogs/1">
          <Chat className who="sdsdsd"/>
        </Route>
        <Route path="/dialogs/2">
          <Chat className who="asdsad"/>
        </Route>
        <Route path="/dialogs/3">
          <Chat className who="ывыd"/>
        </Route>
        <Route path="/dialogs/4">
          <Chat className who="asdsad"/>
        </Route>
        <Route path="/dialogs/5">
          <Chat className who="ывsd"/>
        </Route>
        <Route path="/dialogs/6">
          <Chat className who="ывsda"/>
        </Route>
      </Switch>
    </main>
  );
}

export default Dialogs;
