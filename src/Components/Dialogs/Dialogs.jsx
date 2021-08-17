import React from "react";
import { Switch, Route } from "react-router";
import { Chat } from "../Chat/Chat";
import { DialogList } from "../DialogList/DialogList";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
    function RenderChat(users) {
        return users.map((user) => {
            return (
                <Route path={`/dialogs/${user.id}`}>
                    <Chat data={user} />
                </Route>
            );
        });
    }

    return (
        <main className={`${props.className ?? ""} ${DialogsStyle.dialogs}`}>
            <SectionHeader className={DialogsStyle.heading}>
                Диалоги
            </SectionHeader>
            <DialogList
                className={DialogsStyle.dialogList}
                data={props.chats}
            />
            <Switch>{RenderChat(props.chats ?? [])}</Switch>
        </main>
    );
}

export { Dialogs };
