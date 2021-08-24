import React from "react";
import { RenderMessages } from "./RenderMessages";

import MessagesStyle from "./Messages.module.css";

/* Стоит поменять название, например поставить текущий чат или текущий диалог */
function Messages(props) {
    return (
        <section
            className={`${props.className} ${MessagesStyle.messages}`}
            aria-label={`чат с ${props.getUserInfo(props.chat.id).fullName}`}
        >
            {RenderMessages(
                props.chat.messages,
                props.getUserInfo,
                MessagesStyle.message
            )}
        </section>
    );
}

export { Messages };
