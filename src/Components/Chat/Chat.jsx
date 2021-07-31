import React from "react";
import { Switch, Route } from "react-router-dom";
import MakeMessage from "../MakeMessage/MakeMessage";
import Messages from "../Messages/Messages";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
  return (
    <section className={`${props.className} ${ChatStyle.chat}`}>
      <Messages className={ChatStyle.messages} who={props.who} />

      <MakeMessage
        className={ChatStyle.makeMessage}
        placeholder="Ваше сообщение"
        buttonMessage="Отправить"
      />
    </section>
  );
}

export default Chat;
