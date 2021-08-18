import { Chat } from "../Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (users) => {
  return users.map((user) => {
    return (
      <Route path={`/dialogs/${user.id}`}>
        <Chat data={user} />
      </Route>
    );
  });
};
