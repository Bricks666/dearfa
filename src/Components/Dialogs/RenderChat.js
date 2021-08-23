import { Chat } from "../Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (chats, addMessage, valueFields, enterWords) => {
  return chats.map((chat) => {
    return (
      <Route path={`/dialogs/${chat.id}`}>
        <Chat
          chat={chat}
          addMessage={addMessage}
          valueFields={valueFields}
          enterWords={enterWords}
          key={chat.id}
        />
      </Route>
    );
  });
};
