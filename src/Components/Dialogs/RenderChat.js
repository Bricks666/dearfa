import { Chat } from "../Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (
  chats,
  addMessage,
  stateFields,
  enterWords,
  getUserInfo
) => {
  return chats.map((chat) => {
    return (
      <Route path={`/dialogs/${chat.id}`}>
        <Chat
          chat={chat}
          addMessage={addMessage}
          stateFields={stateFields}
          enterWords={enterWords}
          key={chat.id}
          getUserInfo={getUserInfo}
        />
      </Route>
    );
  });
};
