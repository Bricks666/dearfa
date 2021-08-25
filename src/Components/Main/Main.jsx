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
                <Switch>{RenderProfile(props.store, props.className)}</Switch>
            </Route>
            <Route path="/dialogs">
                <Dialogs
                    className={props.className}
                    chats={props.store.getState().users[1].chats}
                    stateFields={props.store.getState().stateFields}
                    dispatch={props.store.dispatch}
                />
            </Route>
            <Route exact path="/friends">
                <Friends
                    className={props.className}
                    friendsId={props.store.getState().users[1].friendsId}
                    dispatch={props.store.dispatch}
                />
            </Route>
            <Route exact path="/news">
                <News
                    className={props.className}
                    posts={props.store.getState().posts}
                    stateFields={props.store.getState().stateFields}
                    dispatch={props.store.dispatch}
                />
            </Route>
            <Route exact path="/login">
                <Login
                    className={props.className}
                    fields={props.store.getState().loginFields}
                    stateFields={props.store.getState().stateFields}
                    dispatch={props.store.dispatch}
                />
            </Route>
            <Route exact path="/registration">
                <Registration
                    className={props.className}
                    fields={props.store.getState().registrationFields}
                    stateFields={props.store.getState().stateFields}
                    dispatch={props.store.dispatch}
                />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
