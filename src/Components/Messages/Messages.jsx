import Message from "../Message/Message";
import MessagesStyle from "./Messages.module.css";

/* Стоит поменять название, например поставить текущий чат или текущий диалог */
function Messages(props) {
  return (
    <ul className={`${props.className} ${MessagesStyle.messages}`}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </ul>
  );
}

export default Messages;
