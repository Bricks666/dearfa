import { Switch, Route } from "react-router";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import { RenderProfile } from "./RenderProfile";

export function Main(props) {
    return (
        <Switch>
            {RenderProfile(props.data, props.className)}
            <Route path="/dialogs">
                <Dialogs
                    className={props.className}
                    chats={props.data.get(1).chats}
                />
            </Route>
            <Route path="/friends">
                <Friends
                    className={props.className}
                    friends={props.data.get(1).friends}
                />
            </Route>
            <Route path="/news">
                <News
                    className={props.className}
                    posts={props.data.get(1).posts}
                />
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
