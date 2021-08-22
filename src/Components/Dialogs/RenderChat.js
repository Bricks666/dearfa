import { Chat } from "../Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (users, addMessage) => {
  return users.map((user) => {
    return (
      <Route path={`/dialogs/${user.id}`}>
        <Chat
          data={user}
          addMessage={addMessage}
          key={user.id}
        />
      </Route>
    );
  });
};
