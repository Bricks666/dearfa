import { Chat } from "../Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (users, addMessage, valueFields, enterWords) => {
  return users.map((user) => {
    return (
      <Route path={`/dialogs/${user.id}`}>
        <Chat
          data={user}
          addMessage={addMessage}
          valueFields={valueFields}
          enterWords={enterWords}
          key={user.id}
        />
      </Route>
    );
  });
};
