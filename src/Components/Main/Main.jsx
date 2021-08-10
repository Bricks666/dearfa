import { Switch, Route } from "react-router";
import { Profile } from "../Profile/Profile";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";

export function Main(props) {
    return (
        <Switch>
            <Route exact path="/profile">
                <Profile className={props.className} />
            </Route>
            <Route path="/dialogs">
                <Dialogs className={props.className} />
            </Route>
            <Route path="/friends">
                <Friends className={props.className} />
            </Route>
            <Route path="/news">
                <News className={props.className} />
            </Route>
            <Route path="/login">
                <Login className={props.className} />
            </Route>
            <Route path="/registration">
                <Registration className={props.className} />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
