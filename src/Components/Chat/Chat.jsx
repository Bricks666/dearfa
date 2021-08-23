import React from "react";
import { MakeMessage } from "../MakeMessage/MakeMessage";
import { Messages } from "../Messages/Messages";
import { Link } from "react-router-dom";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
    return (
        <section className={`${props.className} ${ChatStyle.chat}`}>
            <Link className={ChatStyle.cross} to="/dialogs" />
            <Messages className={ChatStyle.messages} chat={props.chat} />

            <MakeMessage
                className={ChatStyle.makeMessage}
                placeholder="Ваше сообщение"
                buttonMessage="Отправить"
                callback={props.addMessage}
                fieldsName="Ввод сообщения"
                valueFields={props.valueFields}
                enterWords={props.enterWords}
                authorId={1}
            />
        </section>
    );
}

export { Chat };
