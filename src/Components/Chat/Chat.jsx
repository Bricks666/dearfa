import React from "react";
import { MakeMessage } from "../MakeMessage/MakeMessage";
import { Messages } from "../Messages/Messages";
import { Link } from "react-router-dom";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
    return (
        <section className={`${props.className} ${ChatStyle.chat}`}>
            <Link className={ChatStyle.cross} to="/dialogs" />
            <Messages
                className={ChatStyle.messages}
                chat={props.chat}
                getUserInfo={props.getUserInfo}
            />

            <MakeMessage
                className={ChatStyle.makeMessage}
                placeholder="Ваше сообщение"
                buttonMessage="Отправить"
                callback={props.addMessage}
                fieldsName="Ввод сообщения"
                stateFields={props.stateFields}
                enterWords={props.enterWords}
            />
        </section>
    );
}

export { Chat };
