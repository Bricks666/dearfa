import { Chat } from "./Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (chats) => {
  return chats.map((chat) => {
    return (
      <Route path={`/dialogs/${chat.id}`} key={chat.id}>
        <Chat chat={chat} />
      </Route>
    );
  });
};
