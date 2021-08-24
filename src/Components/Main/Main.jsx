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
                    chats={props.store.state.users[1].chats}
                    stateFields={props.store.state.stateFields}
                    addMessage={props.store.addMessage}
                    enterWords={props.store.enterWords}
                    getUserInfo={props.store.getUserInfo}
                />
            </Route>
            <Route exact path="/friends">
                <Friends
                    className={props.className}
                    friends={props.store.state.users[1].friends}
                    getUserInfo={props.store.getUserInfo}
                />
            </Route>
            <Route exact path="/news">
                <News
                    className={props.className}
                    posts={props.store.state.posts}
                    getUserInfo={props.store.getUserInfo}
                    toggleLike={props.store.toggleLike}
                />
            </Route>
            <Route exact path="/login">
                <Login
                    className={props.className}
                    fields={props.store.state.loginFields}
                    stateFields={props.store.state.stateFields}
                    enterWords={props.store.enterWords}
                />
            </Route>
            <Route exact path="/registration">
                <Registration
                    className={props.className}
                    fields={props.store.state.registrationFields}
                    stateFields={props.store.state.stateFields}
                    enterWords={props.store.enterWords}
                />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
