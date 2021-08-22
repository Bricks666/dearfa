import React from "react";
import { MakeMessage } from "../MakeMessage/MakeMessage";
import { Messages } from "../Messages/Messages";
import { Link } from "react-router-dom";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
    return (
        <section className={`${props.className} ${ChatStyle.chat}`}>
            <Link className={ChatStyle.cross} to="/dialogs" />
            <Messages className={ChatStyle.messages} messages={props.data} />

            <MakeMessage
                className={ChatStyle.makeMessage}
                placeholder="Ваше сообщение"
                buttonMessage="Отправить"
                callback={props.addMessage}
                id={1}
            />
        </section>
    );
}

export { Chat };
