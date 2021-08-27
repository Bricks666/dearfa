import { Switch, Route } from "react-router";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Forms/Login/Login";
import { Registration } from "../Forms/Registration/Registration";
import { RenderProfile } from "./RenderProfile";

export function Main(props) {
    return (
        <Switch>
            <Route exact path="/profile/:id">
                <Switch>
                    {RenderProfile(
                        props.state,
                        props.dispatch,
                        props.className
                    )}
                </Switch>
            </Route>
            <Route path="/dialogs">
                <Dialogs
                    className={props.className}
                    chats={props.state.users[1].chats}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route exact path="/friends">
                <Friends
                    className={props.className}
                    friendsId={props.state.users[1].friendsId}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route exact path="/news">
                <News
                    className={props.className}
                    posts={props.state.posts}
                    stateFields={props.state.stateFields}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route exact path="/login">
                <Login
                    className={props.className}
                    fields={props.state.loginFields}
                    stateFields={props.state.stateFields}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route exact path="/registration">
                <Registration
                    className={props.className}
                    fields={props.state.registrationFields}
                    dispatch={props.dispatch}
                />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
