import React from "react";
import { Switch, Route } from "react-router";
import { Chat } from "../Chat/Chat";
import { DialogList } from "../DialogList/DialogList";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
    const users = [
        { name: "Кирилл", id: 1 },
        { name: "Антон", id: 2 },
        { name: "ТанЦуЮщИй", id: 156 },
        { name: "Кетчуп на столе", id: "ыва" },
        { name: "ГРигорий", id: 1023548 },
        { name: "Катя", id: 5 },
    ];

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
            <DialogList className={DialogsStyle.dialogList} data={props.data} />
            <Switch>{RenderChat(props.data)}</Switch>
        </main>
    );
}

export { Dialogs };
