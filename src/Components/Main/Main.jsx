import { Switch, Route } from "react-router";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

export function Main(props) {
  return (
    <Switch>
      <Route path="/profile">
        <Profile className={props.className} />
      </Route>
      <Route path="/dialogs">
        <Dialogs className={props.className} />
      </Route>
    </Switch>
  );
}
