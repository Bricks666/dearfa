import MakeMessage from "../MakeMessage/MakeMessage";
import Messages from "../Messages/Messages";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
  return (
    <section className={`${props.className} ${ChatStyle.chat}`}>
      <Messages className={ChatStyle.messages} />

      <MakeMessage
        className={ChatStyle.makeMessage}
        placeholder="Ваше сообщение"
        buttonMessage="Отправить"
      />
    </section>
  );
}

export default Chat;
