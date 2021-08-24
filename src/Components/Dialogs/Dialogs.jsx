import React from "react";
import { Switch } from "react-router";
import { DialogList } from "../DialogList/DialogList";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { RenderChat } from "./RenderChat";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
    return (
        <main className={`${props.className ?? ""} ${DialogsStyle.dialogs}`}>
            <SectionHeader className={DialogsStyle.heading}>
                Диалоги
            </SectionHeader>
            <DialogList
                className={DialogsStyle.dialogList}
                dialogs={props.chats}
                getUserInfo={props.getUserInfo}
            />
            <Switch>
                {RenderChat(
                    props.chats,
                    props.addMessage,
                    props.stateFields,
                    props.enterWords,
                    props.getUserInfo
                )}
            </Switch>
        </main>
    );
}

export { Dialogs };
