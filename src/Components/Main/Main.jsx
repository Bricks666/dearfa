import { Switch, Route } from "react-router";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Profile } from "../Profile/Profile";
import { RegistrationContainer } from "../Registration/RegistrationContainer";
import { LoginContainer } from "../Login/LoginContainer";
import { Users } from "../Users/Users";

export function Main(props) {
  return (
    <Switch>
      <Route exact path="/profile/1">
        <Profile
          className={props.className}
          profile={props.state.profile}
          user={props.state.user}
        />
      </Route>
      <Route path="/dialogs">
        <Dialogs className={props.className} chats={props.state.chats} />
      </Route>
      <Route exact path="/friends">
        <Friends className={props.className} />
      </Route>
      <Route exact path="/news">
        <News className={props.className} />
      </Route>
      <Route exact path="/login">
        <LoginContainer className={props.className} />
      </Route>
      <Route exact path="/registration">
        <RegistrationContainer className={props.className} />
      </Route>
      <Route path="/users">
        <Users className={props.className} />
      </Route>
      <Route>
        <NotFound className={props.className} />
      </Route>
    </Switch>
  );
}
